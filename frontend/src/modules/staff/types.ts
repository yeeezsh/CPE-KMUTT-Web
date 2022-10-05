export interface Staff {
  id: string;
  title: string;
  fullTitle: string;
  name: string;
  imageUrl: string;
  academicPosition: string;
  phone: string;
  email: string;
}

export interface StaffGroups {
  title: string;
  staffs: Staff[];
}
