class BusStop {
  no: number;
  gu_ofc: string;
  stty_emd_nm: string;
  stop_id: string;
  stop_no: string;
  stop_nm: string;
  eng_stop_nm: string;
  stop_type: string;
  trnsfr_stn_type: string | null;
  reg_ymd: string;

  constructor(data: any) {
    this.no = data.no;
    this.gu_ofc = data.gu_ofc;
    this.stty_emd_nm = data.stty_emd_nm;
    this.stop_id = data.stop_id;
    this.stop_no = data.stop_no;
    this.stop_nm = data.stop_nm;
    this.eng_stop_nm = data.eng_stop_nm;
    this.stop_type = data.stop_type;
    this.trnsfr_stn_type = data.trnsfr_stn_type;
    this.reg_ymd = data.reg_ymd;
  }
}
