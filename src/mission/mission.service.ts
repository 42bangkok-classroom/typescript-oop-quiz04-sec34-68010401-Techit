import { Injectable } from '@nestjs/common';
import { IMission } from './mission.interface';

@Injectable()
export class MissionService {
  private readonly missions = [
    { id: 1, codename: 'OPERATION_STORM', status: 'ACTIVE' },
    { id: 2, codename: 'SILENT_SNAKE', status: 'COMPLETED' },
    { id: 3, codename: 'RED_DAWN', status: 'FAILED' },
    { id: 4, codename: 'BLACKOUT', status: 'ACTIVE' },
    { id: 5, codename: 'ECHO_FALLS', status: 'COMPLETED' },
    { id: 6, codename: 'GHOST_RIDER', status: 'COMPLETED' },
  ];

  getSummary() {
    return this.missions.reduce(
      (summary, mission) => {
        summary[mission.status] = (summary[mission.status] || 0) + 1;
        return summary;
      },
      {} as Record<string, number>,
    );
  }

  findAll(): IMission[] {
    const filepath = `data/missions.json`;
    const fileContent = require(`../${filepath}`);
    return fileContent as IMission[];
  }
}
