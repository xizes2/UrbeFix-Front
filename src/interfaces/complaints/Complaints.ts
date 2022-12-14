export interface IRegisteredComplaint {
  category: string;
  title: string;
  description?: string;
  countComplaints: number;
  image: string;
  creationDate?: Date;
  location?: number[];
  address: string;
  id: string;
  imageBackUp: string;
  owner: string;
}

export interface IComplaint {
  complaint: IRegisteredComplaint;
}

export interface IUnegisteredComplaint {
  category: string;
  title: string;
  description?: string;
  countComplaints: number;
  image: string;
  creationDate?: Date;
  location?: number[];
  address: string;
}
