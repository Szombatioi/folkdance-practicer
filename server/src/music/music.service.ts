import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Music } from './entities/music.entity';
import { Repository } from 'typeorm';
import { AreaService } from 'src/area/area.service';
import { MusicSourceService } from 'src/music-source/music-source.service';
import { MusicLyricsService } from 'src/music-lyrics/music-lyrics.service';
import { MusicLyric } from 'src/music-lyrics/entities/music-lyric.entity';

@Injectable()
export class MusicService {
  constructor(
   @InjectRepository(Music)
   private readonly musicRepository: Repository<Music>,
    private readonly areaService: AreaService,
    private readonly musicSourceService: MusicSourceService,

    @InjectRepository(MusicLyric)
    private readonly musicLyricRepository: Repository<MusicLyric>
  ){}

  async create(createMusicDto: CreateMusicDto) {
    const {areaId, musicLyricsIds, musicSourceIds, ...data} = createMusicDto;
    
    const music = await this.musicRepository.create(data);
    
    const area = await this.areaService.findOne(areaId);
    music.area = area;

    musicLyricsIds.forEach(async id => {
      const lyric = await this.musicLyricRepository.findOne({where: {id}});
      if(!lyric) throw new NotFoundException(`Music lyric did not found with id #${id}`);
      music.lyrics.push(lyric);
    });

    musicSourceIds.forEach(async id => {
      const source = await this.musicSourceService.findOne(id);
      music.musicSources.push(source);
    });

    return await this.musicRepository.save(music);
  }

  async findAll() {
    return await this.musicRepository.find({
      relations: {
        area: true,
        musicSources: true,
        lyrics: true,
      }
    });
  }

  async findOne(id: number) {
    const music = await this.musicRepository.findOne({
      where: {id},
      relations: {
        area: true,
        musicSources: true,
        lyrics: true,
      }
    });

    if(!music) throw new NotFoundException(`Music did not found with id #${id}`);

    return music;
  }

  async update(id: number, updateMusicDto: UpdateMusicDto) {
    const {delMusicSourceIds, delMusicLyricIds, musicLyricsIds, musicSourceIds, areaId, ...data} = updateMusicDto;

    const music = await this.findOne(id);
    Object.assign(music, data);
    if(areaId) music.area = await this.areaService.findOne(areaId);

    if(musicLyricsIds) musicLyricsIds.forEach(async id => {
      const lyric = await this.musicLyricRepository.findOne({where: {id}});
      if(!lyric) throw new NotFoundException(`Music lyric did not found with id #${id}`);
      music.lyrics.push(lyric);
    });

    if(musicSourceIds) musicSourceIds.forEach(async id => {
      const source = await this.musicSourceService.findOne(id);
      music.musicSources.push(source);
    });

    if(delMusicLyricIds) delMusicLyricIds.forEach(async id => {
      const lyric = await this.musicLyricRepository.findOne({where: {id}});
      if(lyric){
        const index = music.lyrics.indexOf(lyric)
        if(index != -1) delete music.lyrics[index];
      } 
    });

    if(delMusicSourceIds) delMusicSourceIds.forEach(async id => {
      const source = await this.musicSourceService.findOne(id);
      if(source){
        const index = music.musicSources.indexOf(source)
        if(index != -1) delete music.musicSources[index];
      } 
    });

    return await this.musicRepository.save(music);
  }

  //TODO
  remove(id: number) {

  }
}
