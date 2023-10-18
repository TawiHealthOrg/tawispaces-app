const bodyParts = [
  {
    ID: 16,

    Name: "Abdomen, pelvis & buttocks",
  },
  {
    ID: 7,

    Name: "Arms & shoulder",
  },
  {
    ID: 15,

    Name: "Chest & back",
  },
  {
    ID: 6,

    Name: "Head, throat & neck",
  },

  {
    ID: 10,

    Name: "Legs",
  },

  {
    ID: 17,

    Name: "Skin, joints & general",
  },
];

const bodyLocation = [
  {
    id: "16",
    values: [
      {
        ID: 36,

        Name: "Abdomen",
      },

      {
        ID: 40,

        Name: "Buttocks & rectum",
      },

      {
        ID: 38,

        Name: "Genitals & groin",
      },

      {
        ID: 39,

        Name: "Hips & hip joint",
      },

      {
        ID: 37,

        Name: "Pelvis",
      },
    ],
  },
  {
    id: "7",
    values: [
      {
        ID: 48,

        Name: "Arms general",
      },

      {
        ID: 30,

        Name: "Finger",
      },

      {
        ID: 28,

        Name: "Forearm & wrist",
      },

      {
        ID: 29,

        Name: "Hand & wrist",
      },

      {
        ID: 26,

        Name: "Upper arm & shoulder",
      },
    ],
  },
  {
    id: "15",
    values: [
      {
        ID: 33,

        Name: "Back",
      },

      {
        ID: 31,

        Name: "Chest",
      },

      {
        ID: 32,

        Name: "Lateral chest",
      },

      {
        ID: 35,

        Name: "Lower back",
      },

      {
        ID: 34,

        Name: "Spine",
      },
    ],
  },
];

const symptoms = [
  {
    ID: 10,

    Name: "Abdominal pain",
  },

  {
    ID: 44,

    Name: "Nausea",
  },

  {
    ID: 45,

    Name: "Heartburn",
  },

  {
    ID: 54,

    Name: "Reduced appetite",
  },

  {
    ID: 92,

    Name: "Early satiety",
  },

  {
    ID: 101,

    Name: "Vomiting",
  },

  {
    ID: 153,

    Name: "Fast, deepened breathing",
  },

  {
    ID: 179,

    Name: "Stomach burning",
  },

  {
    ID: 181,

    Name: "Vomiting blood",
  },
  {
    ID: 248,

    Name: "Swollen glands in the armpits",
  },

  {
    ID: 12,

    Name: "Pain in the limbs",
  },
  {
    ID: 140,

    Name: "Paralysis",
  },
];

export const getAllBodyParts = () => {
  return bodyParts;
};

export const getBodyLocation = (part) => {
  console.log("Part: %s", part);

  const data = bodyLocation.find((o) => o.id === part);
  console.log("Data: %o", data);
  return data;
};
export const getSymptoms = () => {
  return symptoms;
};

export const getRelatedSymptoms = (symptomId) => {
  return symptoms.filter((symptom) => {
    return symptom.ID !== parseInt(symptomId);
  });
};
