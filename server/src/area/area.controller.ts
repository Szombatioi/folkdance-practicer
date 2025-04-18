import { Controller, Get } from '@nestjs/common';

@Controller('area')
export class AreaController {
    @Get()
    test() {
        return {title: 'yay', message: 'Area controller is working!'};
    }
}
