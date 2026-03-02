import { Injectable } from '@nestjs/common';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';

@Injectable()
export class MissionService {

  private readonly missions = [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' }
  ];

  getSumary() {
    const summary = {
      totalMissions: this.missions.length,
      activeMissions: this.missions.filter(m => m.status === 'ACTIVE').length,
      completedMissions: this.missions.filter(m => m.status === 'COMPLETED').length,
      failedMissions: this.missions.filter(m => m.status === 'FAILED').length
    };
    return summary;
  }
}
