import saints from './saints2';

export default {
  "normative": {
    type: "mapbox",
    displayName: "al-Rijāl",
    initialViewState: {
      longitude: -4.9729,
      latitude: 34.0650,
      zoom: 14.84083
    },
    items: [
      {
        content: `Lorem ipsum`,
        contentArabic: `منهم: بركة فاس والمغرب، أمانهما وحرزهما، وواسطة عقدهما فخرهما، سلطان     الأولياء، ونخبة الصلحاء، والكبراء، والعظماء، والأتقياء، سيد الأسياد، وقطب الأقطاب الأمجاد، الغوث الجامع، والنور الساطع اللامع، المجاحد في سبيل رب العالمين، والمؤسس لما عفى ودثر من معالم الدين، الخليفة الأصعد الأكبر، والهمام الأنزه، الأنوه الأنور، منبع الأسرار والأنوار واللطائف، وعنصر المجد والكمالات وسائر المعارف عين أعيان الخلفاء والعلماء والشرفاء ووارث نور هديه الفضلاء، من تحلى بحلية الكمال والإرشاد والهداية، واتسم بسمة الدلالة على الله تعالى والقبول والرعاية، الغزير الوصف الذي تقصر عن تعداد أوصافه الطروس والأقلام، وتكل دون بلوغ أدناها ألسنة الأنام، العلوي الفاطمي، الحسني الكاملي، الحجازي الأصل، الزرهني المنشأ والفصل، الفاسي الدار القرار، والوفاة المزار، مانح الزائرين وسائر القاصدين بأسراره الريانية المحمدية، وبعقود الجمان والدر النفيس: أبو القاسم وأبو العلاء سيدنا ومولانا إدريس، المعروف بإدريس الأنور وبإدريس الأزهر، وبإدريس صاحب التاج، وبإدريس المثنى، وبإدريس الفاسي، بعبر عنه بعض من لم يراع كمال الأدب معه بإدريس الأصغر، والعذر له أنه لم يرد بذلك تنقيصا وإنما أراد تعريفه`,
        data: {
          name: "Mulay Idris II",
          coordinates: [-4.974722, 34.064847]
        }
      },
      {
        content: `Lorem ipsum`,
        data: {
          name: "Qarawiyyin",
          coordinates: [-4.9744205, 34.064847]
        }
      },
      {
        content: `Lorem ipsum`,
        data: {
          name: "Ahmad at-Tijani",
          coordinates: [-4.9749356, 34.0668389]
        }
      }
    ]
  },
  "known_burial_locations": {
    type: "mapbox",
    displayName: "al-Wālīyāt",
    initialViewState: {
      longitude: -4.9729,
      latitude: 34.0650,
      zoom: 14.84083
    },
    items: saints.filter((o, i) => o.data.locationStatus === "known")
  },
  "unknown_burial_locations": {
    type: "image",
    displayName: "al-Wālīyāt ghayr ma’rūf",
    initialViewState: {
      longitude: -4.990,
      latitude: 34.028,
      zoom: 11.93
    },
    items: saints.filter((o, i) => o.data.locationStatus === "unknown")
  }
};
