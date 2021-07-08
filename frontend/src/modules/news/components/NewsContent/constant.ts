interface CardConstant {
  id: string;
  title: string;
  description: string;
  date: string;
  links?: string;
  variant: string;
}
interface NewsConstant {
  id: string;
  title: string;
  description: string;
  date: string;
  links: string;
  file: {
    title: string;
    link: string;
  }[];
}

export const constants: CardConstant[] = [
  {
    id: '1',
    title: 'การรับเข้าศึกษา',
    description:
      'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
    date: '28 ตุลาคม 2563',
    links: '/images/thumbnail.png',
    variant: 'primary',
  },
  {
    id: '2',
    title: 'การรับเข้าศึกษา',
    description:
      'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
    date: '28 ตุลาคม 2563',
    variant: 'normal',
  },
  {
    id: '3',
    title: 'การรับเข้าศึกษา',
    description:
      'ประกาศรายชื่อผู้มีสิทธิ์เข้าศึกษา โครงการ Active Recruitment รอบที่ 2 ประจำปีการศึกษา 2563',
    date: '28 ตุลาคม 2563',
    variant: 'normal',
  },
];

export const NEWS_CONTENT: NewsConstant = {
  id: '1',
  title: 'ประกาศรายชื่อผู้มีสิทธิ์สอบสัมภาษณ์ โครงการ Active Recruitment รอบที่ 2',
  description:
    'ภาควิชาวิศวกรรมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี เริ่มก่อตั้งและเปิดสอนในระดับปริญญาตรีตั้งแต่ปีการศึกษา 2531แต่ได้รับการอนุมัติให้จัดตั้งหน่วยงาน ภาควิชาวิศวกรรมคอมพิวเตอร์และประกาศในพระราชกฤษฎีกา เมื่อวันที่ 11 กุมภาพันธ์ 2540ภาควิชาวิศวกรรมคอมพิวเตอร์ เปิดสอนทั้งในระดับปริญญาตรี ปริญญาโท และปริญญาเอกโดยในระดับปริญญาตรี แบ่งเป็น 2 หลักสูตร คือ หลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์(ปกติ) และหลักสูตรวิศวกรรมศาสตรบัณฑิตสาขาวิศวกรรมคอมพิวเตอร์ (หลักสูตรนานาชาติ) ส่วนในระดับปริญญาโท คือหลักสูตรวิศวกรรมศาสตรมหาบัณฑิต และวิทยาศาสตรมหาบัณฑิตสาขาวิชาวิศวกรรมคอมพิวเตอร์ และในระดับปริญญาเอก คือ หลักสูตรปรัชญาดุษฎีบัณฑิตสาขาวิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์',
  date: '12 สิงหาคม 2563',
  links: '/images/thumbnail.png',
  file: [
    {
      title: 'CPE2021_AR_0.pdf',
      link: '/',
    },
    {
      title: 'CPE2021_AR_0.pdf',
      link: '/',
    },
  ],
};
