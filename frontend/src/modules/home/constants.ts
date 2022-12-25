import { STATIC_HOME_LINK, STATIC_PROGRAMS } from 'common/constants/links';

export const HOME_PAGE_CRUMB = {
  title: 'หนัาหลัก',
  link: STATIC_HOME_LINK,
};

export const HOME_CONTENTS = {
  programs: {
    background: '/images/static_bg_curriculum.jpg',
    header: 'หลักสูตร',
    content: `ที่วิศวกรรมคอมพิวเตอร์ มจธ. เรามีหลักสูตรหลากหลาย
    ตอบโจทย์ความต้องการของตลาด ทั้งในไทย และระดับโลก `,
    link: STATIC_PROGRAMS,
    external_link: 'https://admission.kmutt.ac.th/',
  },
  awards: {
    header: 'กิจกรรมและความสำเร็จ',
    content: 'ผลงานล่าสุดของนักศึกษาและบุคลากรของภาควิชา',
  },
  gallery: {
    background: '/images/static_bg_gallery.png',
    header: 'แกลเลอรี่รูปภาพ',
    content:
      'ประมวลภาพบรรยากาศ กิจกรรมภายในภาควิชาฯ และกิจกรรมภายนอกที่เกี่ยวข้องกับนักศึกษาของภาควิชาฯ',
    enabledButton: false,
  },
  question: {
    background: '/images/section-question.png',
    header: 'มีคำถามหรือข้อสงสัย',
    content: `มีคำถามหรือข้อสงสัย
สอบถามได้ทันที`,
  },
  i18n: {
    enable: false,
  },
};
