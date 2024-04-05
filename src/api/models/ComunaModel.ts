import mysql from 'mysql';
import config from '../../config';

export class ComunaModel {
  private connection: mysql.Connection;

  constructor() {
    this.connection = mysql.createConnection({
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    });
  }

  public comunaList(idRegion: number, callback: (error: any, results: any) => void) {
    this.connection.query('SELECT id, nombre FROM comuna WHERE idregion = ?', [idRegion], callback);
  }

  public getComunaById(id: number, callback: (error: any, results: any) => void) {
    this.connection.query('SELECT id, nombre, idregion as idRegion FROM comuna WHERE id = ?', [id], callback);
  }

}
