import mysql from 'mysql';
import config from '../../config';

export class RegionModel {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    });
  }

  public regionList(callback: (error: any, results: any) => void) {
    this.connection.query('SELECT id, nombre FROM region', callback);
  }

  public getRegionById(id: number, callback: (error: any, results: any) => void) {
    this.connection.query('SELECT id, nombre FROM region WHERE id = ?', [id], callback);
  }

}
