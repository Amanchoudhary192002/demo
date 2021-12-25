{
  "version": 3,
  "steps": [
    {
      "id": "e2ae9760d40c-baf44b82a3578e46-c475",
      "type": "prompt",
      "dataType": "[\"Services\",\"Department\",\"More Information\"]",
      "designer": {
        "xLocation": 353,
        "yLocation": 0,
        "listStyle": 3,
        "next": "be847a4b51b9-042ab315ab855db5-6f78"
      },
      "text": "Hello! how can help you!1?",
      "variable": "greetings",
      "submitTitle": "Submit",
      "stringId": "stringId_1f067308ae0fe918",
      "label": "Greetings",
      "choiceType": "choice"
    },
    {
      "id": "be847a4b51b9-042ab315ab855db5-6f78",
      "type": "branch",
      "condition": "scenario.greetings.index==0;",
      "designer": {
        "xLocation": 360,
        "yLocation": 50,
        "next": "51023cc9880d-01c1dc003b6dd4fa-2054"
      },
      "targetStepId": "035740005594-e82054825ddcb944-9426"
    },
    {
      "id": "24779f210e38-05cf8f9b57b7df87-d5d2",
      "type": "prompt",
      "dataType": "[\"Emergency and Trauma\",\"ICU and CCU\",\"Pharmacy\",\"Microbiology and Research wing\",\"OPD\"]",
      "designer": {
        "xLocation": 460,
        "yLocation": 160,
        "listStyle": 3,
        "next": "576ca52753d1-0c3fff18af6e84f9-f077"
      },
      "text": "Entering into Services..",
      "variable": "services",
      "submitTitle": "Submit",
      "label": "Services",
      "stringId": "stringId_894c9bdddc43e876",
      "choiceType": "choice"
    },
    {
      "id": "576ca52753d1-0c3fff18af6e84f9-f077",
      "type": "switch",
      "designer": {
        "xLocation": 472,
        "yLocation": 209,
        "next": "5e07a7c906e5-ada1ccea0275dbfb-eb39"
      },
      "cases": [
        {
          "value": "Emergency and Trauma",
          "targetStepId": "7a33dfe08104-e91d9167f0d39e2c-3a38"
        },
        {
          "value": "ICU and CCU",
          "targetStepId": "3be95b33465a-979d41b8011fa043-1591"
        },
        {
          "value": "Pharmacy",
          "targetStepId": "e995e5dad5ca-ccf308a99918c4b5-2422"
        },
        {
          "value": "Microbiology and Research wing",
          "targetStepId": "90b7d57d5756-a82e447952521091-03a6"
        },
        {
          "value": "OPD",
          "targetStepId": "48c37f3c903b-6fd28dad480d3503-b69c"
        }
      ],
      "label": "Services",
      "condition": "${services}.entity"
    },
    {
      "id": "7a33dfe08104-e91d9167f0d39e2c-3a38",
      "type": "statement",
      "designer": {
        "xLocation": 486,
        "yLocation": 340
      },
      "text": "Open 24x7 on the ground Floor ",
      "label": "Emergency and Trauma",
      "stringId": "stringId_bb10cddcfa79f7ac"
    },
    {
      "id": "3be95b33465a-979d41b8011fa043-1591",
      "type": "statement",
      "designer": {
        "xLocation": 660,
        "yLocation": 440
      },
      "text": "This is second floor ",
      "label": "ICU and CCU",
      "stringId": "stringId_2137f01238bce1f9"
    },
    {
      "id": "e995e5dad5ca-ccf308a99918c4b5-2422",
      "type": "statement",
      "designer": {
        "xLocation": 660,
        "yLocation": 380
      },
      "text": "how to make ",
      "label": "Pharmacy",
      "stringId": "stringId_06530ec9e5523eb0"
    },
    {
      "id": "5e07a7c906e5-ada1ccea0275dbfb-eb39",
      "type": "statement",
      "designer": {
        "xLocation": 767,
        "yLocation": 232
      },
      "text": "You Have entered services",
      "label": "Default",
      "stringId": "stringId_859c04f93a9e5d27"
    },
    {
      "id": "51023cc9880d-01c1dc003b6dd4fa-2054",
      "type": "branch",
      "condition": "scenario.greetings.index ==1",
      "designer": {
        "xLocation": 260,
        "yLocation": 80,
        "next": "da795876d7b9-b29958609e8b0227-2a93"
      },
      "label": "department",
      "targetStepId": "fef435b5438a-e18b64967f1ddd67-2d92"
    },
    {
      "id": "be0e951e0274-c88e3c9ca59a08fb-1453",
      "type": "statement",
      "designer": {
        "xLocation": 360,
        "yLocation": 273
      },
      "text": "You have entered into services department ",
      "label": "Default",
      "stringId": "stringId_cf579d35d2b8d153"
    },
    {
      "id": "8004137ecb58-2a015530424ca04f-9521",
      "type": "prompt",
      "dataType": "[\"Cardiolgy\",\"Dentist\",\"Neurolgy\"]",
      "designer": {
        "xLocation": 280,
        "yLocation": 200,
        "listStyle": 3,
        "next": "0c22b6101d04-3f5a44e91415fd9b-d233"
      },
      "text": "Entering into depertment...     ",
      "variable": "department",
      "submitTitle": "Submit",
      "label": "Department",
      "stringId": "stringId_2f11b8e7c23db311",
      "choiceType": "choice"
    },
    {
      "id": "0c22b6101d04-3f5a44e91415fd9b-d233",
      "type": "switch",
      "designer": {
        "xLocation": 229,
        "yLocation": 280,
        "next": "be0e951e0274-c88e3c9ca59a08fb-1453"
      },
      "cases": [
        {
          "value": "Cardiolgy",
          "targetStepId": "930f454927b3-3512cbbeb7b19797-0e1b"
        },
        {
          "value": "Dentist",
          "targetStepId": "03560ada1658-b1c12f310372d6e8-1906"
        },
        {
          "value": "Neurology",
          "targetStepId": "c9cea4a4e2b8-cec1c4408bcfe100-7780"
        }
      ],
      "condition": "${department}.entity"
    },
    {
      "id": "930f454927b3-3512cbbeb7b19797-0e1b",
      "type": "statement",
      "designer": {
        "xLocation": 146,
        "yLocation": 380
      },
      "text": "Cardiolgy department is open during 1PM to 5PM",
      "label": "Cardiolgy",
      "stringId": "stringId_733dd39dac9f15fb"
    },
    {
      "id": "03560ada1658-b1c12f310372d6e8-1906",
      "type": "statement",
      "designer": {
        "xLocation": 260,
        "yLocation": 400
      },
      "text": "Pediatrics department is open during 9AM to 5PM",
      "label": "Dentist",
      "stringId": "stringId_d56d38fdc548fc0c"
    },
    {
      "id": "c9cea4a4e2b8-cec1c4408bcfe100-7780",
      "type": "statement",
      "designer": {
        "xLocation": 350,
        "yLocation": 368
      },
      "text": "Neurology department is open during 6PM to 8:30PM",
      "label": "Neurology",
      "stringId": "stringId_d4753697c2413dcf"
    },
    {
      "id": "da795876d7b9-b29958609e8b0227-2a93",
      "type": "statement",
      "designer": {
        "xLocation": 160,
        "yLocation": 129
      },
      "text": "Please Visti our website or Email us for More information  ",
      "label": "More Information",
      "stringId": "stringId_29314680fc1f028f"
    },
    {
      "id": "90b7d57d5756-a82e447952521091-03a6",
      "type": "statement",
      "designer": {
        "xLocation": 660,
        "yLocation": 320
      },
      "text": "Microbiolgy and Research wing is seconfdd",
      "label": "Microbiolgy and Research wing",
      "stringId": "stringId_e067f1a5e6f3c96e"
    },
    {
      "id": "48c37f3c903b-6fd28dad480d3503-b69c",
      "type": "statement",
      "designer": {
        "xLocation": 666,
        "yLocation": 260
      },
      "text": "OPDOPDOPD",
      "label": "OPD",
      "stringId": "stringId_756a52641b3585b9"
    },
    {
      "id": "fef435b5438a-e18b64967f1ddd67-2d92",
      "type": "prompt",
      "dataType": "string",
      "designer": {
        "xLocation": 332,
        "yLocation": 151,
        "next": "8004137ecb58-2a015530424ca04f-9521"
      },
      "text": "Please enter \"vitals\" as your response. If already entered ,please enter \"NA\"",
      "variable": "vitals",
      "submitTitle": "Submit",
      "stringId": "stringId_3e584dc168db0b7d",
      "label": "Vitals"
    },
    {
      "id": "035740005594-e82054825ddcb944-9426",
      "type": "prompt",
      "dataType": "string",
      "designer": {
        "xLocation": 460,
        "yLocation": 94,
        "next": "24779f210e38-05cf8f9b57b7df87-d5d2"
      },
      "text": "Please enter \"vitals\" as your response. If already entered ,please enter \"NA\"",
      "variable": "vitals",
      "submitTitle": "Submit",
      "stringId": "stringId_3e584dc168db0b7d",
      "label": "Vitals"
    }
  ]
}
