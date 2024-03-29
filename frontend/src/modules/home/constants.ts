import { STATIC_HOME_LINK } from 'common/constants/links';

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
  badgeContactSection: {
    kmutt: 'https://www.kmutt.ac.th',
    messenger: 'https://m.me/cpe.kmutt',
    facebook: 'https://www.facebook.com/cpe.kmutt',
  },
  i18n: {
    enable: true,
  },
};
