import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateMusicLyricDto } from "./dto/create-music-lyric.dto";
import { UpdateMusicLyricDto } from "./dto/update-music-lyric.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { MusicLyric } from "./entities/music-lyric.entity";
import { Repository } from "typeorm";
import { MusicService } from "src/music/music.service";

@Injectable()
export class MusicLyricsService {
  constructor(
    @InjectRepository(MusicLyric)
    private readonly lyricRepository: Repository<MusicLyric>,

    private readonly musicService: MusicService
  ) {}

  async create(createMusicLyricDto: CreateMusicLyricDto) {
    // const { musicId, ...data } = createMusicLyricDto;
    const lyric = this.lyricRepository.create(createMusicLyricDto);

    // const music = await this.musicService.findOne(musicId);
    // if(!music) throw new NotFoundException(`Music did not found with id #${musicId}`);
    // lyric.music = music;

    return await this.lyricRepository.save(lyric);
  }

  async findAll() {
    return await this.lyricRepository.find(); //TODO relations?
  }

  async findOne(id: number) {
    const lyric = await this.lyricRepository.findOne({where: {id}}); //TODO relations?
    if(!lyric) throw new NotFoundException(`Lyric did not found with id #${id}`);
    return lyric;
  }

  async update(id: number, updateMusicLyricDto: UpdateMusicLyricDto) {

    const lyric = await this.findOne(id);

    Object.assign(lyric, updateMusicLyricDto);

    // if(musicId) lyric.music = await this.musicService.findOne(musicId);

    return await this.lyricRepository.save(lyric);
  }

  //TODO
  remove(id: number) {

  }
}
