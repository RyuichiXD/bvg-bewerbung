export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Message {
  barrierefrei?: string; // <== hat in der API doku gefehlt
  beginnAbschnittHafasId?: number;
  beginnAbschnittName?: string;
  datum?: string;
  endeAbschnittHafasId?: number;
  endeAbschnittName?: string;
  geokoordinaten?: Coordinate;
  grundFahrplanabweichung: number;
  gueltigBisDatum?: string;
  gueltigBisZeit?: string;
  gueltigVonDatum?: string;
  gueltigVonZeit?: string;
  linie?: string;
  meldungsId: string;
  prioritaet?: number;
  relatedMessageIds?: string[];
  richtungHafasId?: number;
  richtungName?: string;
  sev?: string;
  textIntAuswirkung?: string;
  textIntUrsache?: string;
  textWAPSMSAuswirkung?: string;
  textWAPSMSUrsache?: string;
  type: number;
  umfahrung?: string;
  verkehrsmittel: number;
}
