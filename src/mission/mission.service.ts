import { Injectable } from '@nestjs/common';

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

  getSummary() {
    const activeMissions = this.missions.reduce((count, mission) => {
      return mission.status === 'ACTIVE' ? count + 1 : count;
    }, 0);
    const completedMissions = this.missions.reduce((count, mission) => {
      return mission.status === 'COMPLETED' ? count + 1 : count;
    }, 0);
    const failedMissions = this.missions.reduce((count, mission) => {
      return mission.status === 'FAILED' ? count + 1 : count;
    }, 0);

    return {
      activeMissions,
      completedMissions,
      failedMissions
    };
  }
}
