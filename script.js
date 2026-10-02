// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    }  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "この実験は、\u003Cstrong\u003E慶應義塾大学社会学研究科\u003C\u002Fstrong\u003Eが行う研究プロジェクトの一環として、\u003Cstrong\u003E日本プロ野球のファンの実態\u003C\u002Fstrong\u003Eを調べるためのものです。\u003Cbr\u003E\n\u003Cbr\u003E\n日本プロ野球に好きなチームがない方は、ブラウザを閉じて終了してください。\u003Cbr\u003E\n\u003Cbr\u003E\n実験を始める前に、次のページでは、まず、実験参加への同意をいただきます。\u003Cbr\u003E\n準備ができましたら「次へ」をクリックしてください。",
          "title": "実験にご参加いただき、ありがとうございます。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
const digits = 7;
const participantID = this.random.range(10**digits, 10**(digits+1));
this.state.participantID = participantID;
}
      },
      "title": "instruction"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験参加の同意確認",
          "content": "【目的】この実験は、日本プロ野球のファンの実態を調べるためのものです。\u003Cbr\u003E\n【所要時間】この実験はおおよそ5分かかります。\u003Cbr\u003E\n【リスク】ネガティブな感情になったり、疲労を感じる可能性があります。\u003Cbr\u003E\n【リスクへの対策】体調がわるくなった場合には、参加を取りやめてください。\u003Cbr\u003E\n【謝礼】この実験への参加に対する謝金は一律100円です。\u003Cbr\u003E\n【個人情報】この実験では、個人を特定できる情報は一切収集しません。\u003Cbr\u003E\n【データの利用】この実験で得られたデータは、学術的な目的にのみ利用します。\u003Cbr\u003E"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "上記のすべてをご了解の上、実験参加にご同意いただけますか。 ご同意いただけない方は、ブラウザを閉じて終了してください。",
          "options": [
            {
              "label": "はい、同意します。"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "agreement"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "以下の日本プロ野球に所属する12球団のうち、あなたが最も応援している球団を一つ選んでください。",
          "options": [
            {
              "label": "読売ジャイアンツ",
              "coding": "YG"
            },
            {
              "label": "東京ヤクルトスワローズ",
              "coding": "YS"
            },
            {
              "label": "横浜DeNAベイスターズ",
              "coding": "DB"
            },
            {
              "label": "中日ドラゴンズ",
              "coding": "CD"
            },
            {
              "label": "阪神タイガース",
              "coding": "HT"
            },
            {
              "label": "広島東洋カープ",
              "coding": "HC"
            },
            {
              "label": "北海道日本ハムファイターズ",
              "coding": "NF"
            },
            {
              "label": "東北楽天ゴールデンイーグルス",
              "coding": "RE"
            },
            {
              "label": "埼玉西武ライオンズ",
              "coding": "SL"
            },
            {
              "label": "千葉ロッテマリーンズ",
              "coding": "LM"
            },
            {
              "label": "オリックス・バファローズ",
              "coding": "OB"
            },
            {
              "label": "福岡ソフトバンクホークス",
              "coding": "SH"
            }
          ],
          "name": "fav_team"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "favoriteBaseballTeam"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "radio",
          "label": "以下の日本プロ野球に所属する12球団のうち、あなたが最もライバル視している球団を一つ選んでください。",
          "options": [
            {
              "label": "読売ジャイアンツ",
              "coding": "YG"
            },
            {
              "label": "東京ヤクルトスワローズ",
              "coding": "YS"
            },
            {
              "label": "横浜DeNAベイスターズ",
              "coding": "DB"
            },
            {
              "label": "中日ドラゴンズ",
              "coding": "CD"
            },
            {
              "label": "阪神タイガース",
              "coding": "HT"
            },
            {
              "label": "広島東洋カープ",
              "coding": "HC"
            },
            {
              "label": "北海道日本ハムファイターズ",
              "coding": "NF"
            },
            {
              "label": "東北楽天ゴールデンイーグルス",
              "coding": "RE"
            },
            {
              "label": "埼玉西武ライオンズ",
              "coding": "SL"
            },
            {
              "label": "千葉ロッテマリーンズ",
              "coding": "LM"
            },
            {
              "label": "オリックス・バファローズ",
              "coding": "OB"
            },
            {
              "label": "福岡ソフトバンクホークス",
              "coding": "SH"
            }
          ],
          "name": "other_team"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "rivalBaseballTeam"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "単語仕分け課題1",
          "content": "これから、画面中央に表示される「ロゴ」「ユニフォーム」「マスコット」の画像を、仕分ける課題の\u003Cstrong\u003E練習\u003C\u002Fstrong\u003Eを行います。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E応援しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像が出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【F】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003Eライバル視しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」が出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【J】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\nを押してください。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n画像は\u003Cstrong\u003E1つずつ順番\u003C\u002Fstrong\u003Eに表示されます。\u003Cbr\u003E\nできるだけ「早く」、かつ「正確に」 キーを押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction1"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image_team_path": "static\u002F${this.state.fav_team}_1.png",
          "team_type": "favorite"
        },
        {
          "image_team_path": "static\u002F${this.state.fav_team}_2.png",
          "team_type": "favorite"
        },
        {
          "image_team_path": "static\u002F${this.state.fav_team}_3.png",
          "team_type": "favorite"
        },
        {
          "image_team_path": "static\u002F${this.state.fav_team}_4.png",
          "team_type": "favorite"
        },
        {
          "image_team_path": "static\u002F${this.state.fav_team}_5.png",
          "team_type": "favorite"
        },
        {
          "image_team_path": "static\u002F${this.state.other_team}_1.png",
          "team_type": "rival"
        },
        {
          "image_team_path": "static\u002F${this.state.other_team}_2.png",
          "team_type": "rival"
        },
        {
          "image_team_path": "static\u002F${this.state.other_team}_3.png",
          "team_type": "rival"
        },
        {
          "image_team_path": "static\u002F${this.state.other_team}_4.png",
          "team_type": "rival"
        },
        {
          "image_team_path": "static\u002F${this.state.other_team}_5.png",
          "team_type": "rival"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practiceBaseballTeam",
      "skip": true,
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "practiceTrialBaseballTeam",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixationBaseballTeam",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 500,
                "height": 500,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.parameters.image_team_path}",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 275,
                "angle": 0,
                "width": 725.42,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "応援しているチームはFキー、ライバル視しているチームはJキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "YG1.png": "embedded\u002Fdd421e5f3f615b44f693ba53971190ab48a956ce8d6057d422ba8b505acd6fc1.png"
            },
            "responses": {
              "keypress(f)": "favorite",
              "keypress(j)": "rival"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wordBaseballTeam",
            "correctResponse": "${this.parameters.team_type}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blankBaseballTeam",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "続いて、画面中央に表示される「ポジティブな単語」や「ネガティブな単語」を、仕分ける課題の\u003Cstrong\u003E練習\u003C\u002Fstrong\u003Eを行います。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E「ポジティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【F】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E「ネガティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【J】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\nを押してください。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n文字は\u003Cstrong\u003E1つずつ順番\u003C\u002Fstrong\u003Eに表示されます。\u003Cbr\u003E\nできるだけ「早く」、かつ「正確に」 キーを押してください。",
          "title": "単語仕分け課題2"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction2"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image_word_path": "static\u002Fpositive_1.png",
          "word_type": "positive"
        },
        {
          "image_word_path": "static\u002Fpositive_2.png",
          "word_type": "positive"
        },
        {
          "image_word_path": "static\u002Fpositive_3.png",
          "word_type": "positive"
        },
        {
          "image_word_path": "static\u002Fpositive_4.png",
          "word_type": "positive"
        },
        {
          "image_word_path": "static\u002Fpositive_5.png",
          "word_type": "positive"
        },
        {
          "image_word_path": "static\u002Fnegative_1.png",
          "word_type": "negative"
        },
        {
          "image_word_path": "static\u002Fnegative_2.png",
          "word_type": "negative"
        },
        {
          "image_word_path": "static\u002Fnegative_3.png",
          "word_type": "negative"
        },
        {
          "image_word_path": "static\u002Fnegative_4.png",
          "word_type": "negative"
        },
        {
          "image_word_path": "static\u002Fnegative_5.png",
          "word_type": "negative"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practiceWord",
      "skip": true,
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "practiceTrialWord",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixationBaseballWord",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 500,
                "height": 500,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.parameters.image_word_path}",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 275,
                "angle": 0,
                "width": 601.92,
                "height": 28.25,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "ポジティブな単語はFキー、ネガティブな単語はJキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "25",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "YG1.png": "embedded\u002Fdd421e5f3f615b44f693ba53971190ab48a956ce8d6057d422ba8b505acd6fc1.png"
            },
            "responses": {
              "keypress(f)": "positive",
              "keypress(j)": "negative"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wordBaseballWord",
            "correctResponse": "${this.parameters.word_type}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blankBaseballWord",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "続いて、画面中央に表示される「ロゴ」「ユニフォーム」「マスコット」の画像および「ポジティブな単語」や「ネガティブな単語」を、仕分ける課題の\u003Cstrong\u003E練習\u003C\u002Fstrong\u003Eを行います。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E応援しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ポジティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【F】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003Eライバル視しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ネガティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【J】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\nを押してください。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n画像や文字は\u003Cstrong\u003E1つずつ順番\u003C\u002Fstrong\u003Eに表示されます。\u003Cbr\u003E\nできるだけ「早く」、かつ「正確に」 キーを押してください。",
          "title": "単語仕分け課題3"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction3"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image_path": "static\u002F${this.state.fav_team}_1.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_2.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_3.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_1.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_2.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_3.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002Fpositive_1.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_2.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_3.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fnegative_1.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_2.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_3.png",
          "image_type": "negative"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practiceTeam&Word",
      "skip": true,
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "practiceTrialTeam&Word",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixationTeam&Word",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "500",
                "height": "500",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.parameters.image_path}"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 275,
                "angle": 0,
                "width": 690.25,
                "height": 16.95,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "応援しているチーム・ポジティブな単語はFキー、ライバル視しているチームネガティブな単語はJキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "15",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "YG1.png": "embedded\u002Fdd421e5f3f615b44f693ba53971190ab48a956ce8d6057d422ba8b505acd6fc1.png"
            },
            "responses": {
              "keypress(f)": "positive",
              "keypress(j)": "negative"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wordTeam&Word",
            "correctResponse": "${this.parameters.image_type}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blankTeam&Word",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "title": "単語仕分け課題4",
          "content": "いま取り組んでいただいた課題は、練習でした。\u003Cbr\u003E\n引き続き\u003Cstrong\u003E本番\u003C\u002Fstrong\u003Eとして、画面中央に表示される「ロゴ」「ユニフォーム」「マスコット」の画像および「ポジティブな単語」や「ネガティブな単語」を、仕分ける課題を行います。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E応援しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ポジティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【F】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003Eライバル視しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ネガティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【J】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\nを押してください。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n画像や文字は\u003Cstrong\u003E1つずつ順番\u003C\u002Fstrong\u003Eに表示されます。\u003Cbr\u003E\nできるだけ「早く」、かつ「正確に」 キーを押してください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction4"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image_path": "static\u002F${this.state.fav_team}_1.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_2.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_3.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_4.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_5.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_1.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_2.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_3.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_4.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_4.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002Fpositive_1.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_2.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_3.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_4.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_5.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fnegative_1.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_2.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_3.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_4.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_5.png",
          "image_type": "negative"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "testTeamWord",
      "skip": true,
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "testTrialTeamWord",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixationTeamWord",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 500,
                "height": 500,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.parameters.image_path}",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 275,
                "angle": 0,
                "width": 705.25,
                "height": 16.95,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "応援しているチーム・ポジティブな単語はFキー、ライバル視しているチーム・ネガティブな単語はJキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "15",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "YG1.png": "embedded\u002Fdd421e5f3f615b44f693ba53971190ab48a956ce8d6057d422ba8b505acd6fc1.png"
            },
            "responses": {
              "keypress(f)": "positive",
              "keypress(j)": "negative"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wordTeamWord",
            "correctResponse": "${this.parameters.image_type}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blankTeamWord",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "引き続き、画面中央に表示される「ロゴ」「ユニフォーム」「マスコット」の画像および「ポジティブな単語」や「ネガティブな単語」を、仕分ける課題の\u003Cstrong\u003E練習\u003C\u002Fstrong\u003Eを行います。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003Eライバル視しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ポジティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【F】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E応援しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ネガティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【J】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\nを押してください。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E先ほどと異なり、応援しているチームとライバル視しているチームの押すキーが逆となりますので、ご注意ください。\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\n画像や文字は\u003Cstrong\u003E1つずつ順番\u003C\u002Fstrong\u003Eに表示されます。\u003Cbr\u003E\nできるだけ「早く」、かつ「正確に」 キーを押してください。",
          "title": "単語仕分け課題5"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction5"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image_path": "static\u002F${this.state.fav_team}_1.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_2.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_3.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_1.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_2.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_3.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002Fpositive_1.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_2.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_3.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fnegative_1.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_2.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_3.png",
          "image_type": "negative"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "practiceTeam&Word2",
      "skip": true,
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "practiceTrialTeam&Word2",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixationTeam&Word2",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": "500",
                "height": "500",
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.parameters.image_path}"
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 275,
                "angle": 0,
                "width": 705.25,
                "height": 16.95,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "ライバル視しているチーム・ポジティブな単語はFキー、応援しているチーム・ネガティブな単語はJキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "15",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "YG1.png": "embedded\u002Fdd421e5f3f615b44f693ba53971190ab48a956ce8d6057d422ba8b505acd6fc1.png"
            },
            "responses": {
              "keypress(j)": "negative",
              "keypress(f)": "positive"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wordTeam&Word2",
            "correctResponse": "${this.parameters.image_type}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blankTeam&Word2",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "text",
          "content": "いま取り組んでいただいた課題は、練習でした。\u003Cbr\u003E\n引き続き\u003Cstrong\u003E本番\u003C\u002Fstrong\u003Eとして、画面中央に表示される「ロゴ」「ユニフォーム」「マスコット」の画像および「ポジティブな単語」や「ネガティブな単語」を、仕分ける課題を行います。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003Eライバル視しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ポジティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【F】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cstrong\u003E応援しているチーム\u003C\u002Fstrong\u003Eの「ロゴ」「ユニフォーム」「マスコット」の画像あるいは、\u003Cstrong\u003E「ネガティブな単語」\u003C\u002Fstrong\u003Eが出たら\u003Cbr\u003E\n → \u003Cstrong\u003E【J】キー\u003C\u002Fstrong\u003E\u003Cbr\u003E\n\u003Cbr\u003E\nを押してください。\u003Cbr\u003E\n\u003Cbr\u003E\n\u003Cbr\u003E\n画像や文字は\u003Cstrong\u003E1つずつ順番\u003C\u002Fstrong\u003Eに表示されます。\u003Cbr\u003E\nできるだけ「早く」、かつ「正確に」 キーを押してください。",
          "title": "単語仕分け課題6"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "始める",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "instruction6"
    },
    {
      "type": "lab.flow.Loop",
      "templateParameters": [
        {
          "image_path": "static\u002F${this.state.fav_team}_1.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_2.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_3.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_4.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.fav_team}_5.png",
          "image_type": "favorite"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_1.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_2.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_3.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_4.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002F${this.state.other_team}_4.png",
          "image_type": "rival"
        },
        {
          "image_path": "static\u002Fpositive_1.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_2.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_3.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_4.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fpositive_5.png",
          "image_type": "positive"
        },
        {
          "image_path": "static\u002Fnegative_1.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_2.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_3.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_4.png",
          "image_type": "negative"
        },
        {
          "image_path": "static\u002Fnegative_5.png",
          "image_type": "negative"
        }
      ],
      "sample": {
        "mode": "draw-shuffle",
        "n": ""
      },
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "testTeamWord2",
      "skip": true,
      "tardy": true,
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "responses": {
          "": ""
        },
        "parameters": {},
        "messageHandlers": {},
        "title": "testTrialTeamWord2",
        "content": [
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "i-text",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 17.76,
                "height": 36.16,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "+",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": 32,
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "fixationTeamWord2",
            "timeout": "500"
          },
          {
            "type": "lab.canvas.Screen",
            "content": [
              {
                "type": "image",
                "left": 0,
                "top": 0,
                "angle": 0,
                "width": 500,
                "height": 500,
                "stroke": null,
                "strokeWidth": 0,
                "fill": "black",
                "src": "${this.parameters.image_path}",
                "autoScale": undefined
              },
              {
                "type": "i-text",
                "left": 0,
                "top": 275,
                "angle": 0,
                "width": 705.25,
                "height": 16.95,
                "stroke": null,
                "strokeWidth": 1,
                "fill": "black",
                "text": "ライバル視しているチーム・ポジティブな単語はFキー、応援しているチーム・ネガティブな単語はJキー",
                "fontStyle": "normal",
                "fontWeight": "normal",
                "fontSize": "15",
                "fontFamily": "sans-serif",
                "lineHeight": 1.16,
                "textAlign": "center"
              }
            ],
            "viewport": [
              800,
              600
            ],
            "files": {
              "YG1.png": "embedded\u002Fdd421e5f3f615b44f693ba53971190ab48a956ce8d6057d422ba8b505acd6fc1.png"
            },
            "responses": {
              "keypress(j)": "negative",
              "keypress(f)": "positive"
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "wordTeamWord2",
            "correctResponse": "${this.parameters.image_type}",
            "tardy": true
          },
          {
            "type": "lab.canvas.Screen",
            "content": [],
            "viewport": [
              800,
              600
            ],
            "files": {},
            "responses": {
              "": ""
            },
            "parameters": {},
            "messageHandlers": {},
            "title": "blankTeamWord2",
            "timeout": "500"
          }
        ]
      }
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "単語の仕分け、お疲れ様でした。",
          "content": "それでは最後に、あなたのお考えについていくつか質問させていただきます。\nそれぞれの質問項目に対し、あなたのお考えに最も近い選択肢を一つお選びください。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "誰かが、自分の好きなチームを賞賛した時、それは個人的なほめ言葉のように感じる",
          "options": [
            {
              "label": "まったくあてはまらない",
              "coding": "1"
            },
            {
              "label": "あまりあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらでもない",
              "coding": "3"
            },
            {
              "label": "あてはまる",
              "coding": "4"
            },
            {
              "label": "おおいにあてはまる",
              "coding": "5"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaire1"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "自分の好きなチームの成功は自分の成功である",
          "options": [
            {
              "label": "まったくあてはまらない",
              "coding": "1"
            },
            {
              "label": "あまりあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらでもない",
              "coding": "3"
            },
            {
              "label": "あてはまる",
              "coding": "4"
            },
            {
              "label": "おおいにあてはまる",
              "coding": "5"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaire2"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "誰かが、自分の好きなチームを批判した時、それは個人的な侮辱のように感じられる",
          "options": [
            {
              "label": "まったくあてはまらない",
              "coding": "1"
            },
            {
              "label": "あまりあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらでもない",
              "coding": "3"
            },
            {
              "label": "あてはまる",
              "coding": "4"
            },
            {
              "label": "おおいにあてはまる",
              "coding": "5"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaire3"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "あなたは、自分の好きなチームについて話す時、たいてい「彼らは」というよりも「私たちは」と言う",
          "options": [
            {
              "label": "まったくあてはまらない",
              "coding": "1"
            },
            {
              "label": "あまりあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらでもない",
              "coding": "3"
            },
            {
              "label": "あてはまる",
              "coding": "4"
            },
            {
              "label": "おおいにあてはまる",
              "coding": "5"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaire4"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "content": "以下の質問文を読んでいただき，あなたにもっとも当てはまると思う選択肢を選んで回答してください。回答は選択肢のボタンをチェックすることで行ってください。"
        },
        {
          "required": true,
          "type": "radio",
          "label": "マスコミの記事が、自分の好きなチームを批判した時、あなたは恥ずかしく感じる",
          "options": [
            {
              "label": "まったくあてはまらない",
              "coding": "1"
            },
            {
              "label": "あまりあてはまらない",
              "coding": "2"
            },
            {
              "label": "どちらでもない",
              "coding": "3"
            },
            {
              "label": "あてはまる",
              "coding": "4"
            },
            {
              "label": "おおいにあてはまる",
              "coding": "5"
            }
          ],
          "name": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Questionnaire5"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験の目的について説明します。",
          "content": "実験はすべて終了いたしました。ご協力いただき、誠にありがとうございました。\n本実験では、事前に「日本プロ野球のファンの実態調査」とご説明しておりましたが、学術的な真の研究目的は\u003Cstrong\u003E「プロスポーツチームへの潜在的なアイデンティティが、ポジティブなあるいは、ネガティブな単語とどのように結びついているかを検討すること」\u003C\u002Fstrong\u003Eでした。"
        },
        {
          "required": true,
          "type": "text",
          "title": "潜在的連合テスト（IAT）について",
          "content": "中盤と終盤に行っていただいたボタン押しの課題は、心理学で「IAT」と呼ばれる手法です。\nこのテストでは、画面の左右のカテゴリの組み合わせが変わることで、キーを押す速さにわずかなタイムラグが生じる仕組みを利用しています。これは脳内における「自チーム」と「ポジティブな感情」の無意識の結びつきの強さを測定するための一般的な心理学の手続きであり、\u003Cstrong\u003E個人の能力や人格の優劣を評価するものでは決してありません。\u003C\u002Fstrong\u003E 途中で押しづらさや難しさを感じられたかと思いますが、それは実験のデザイン上、誰もが経験する正常な反応です。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "debriefing"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "実験はこれで終了です。",
          "content": "お疲れ様でした！\u003Cbr\u003E\nこの度は、実験にご参加いただき、誠にありがとうございます。\u003Cbr\u003E\nデータはすでに保存されていますので、このままブラウザを閉じていただいても大丈夫です。\u003Cbr\u003E\n\u003Cbr\u003E\n完了コードは、\u003Cstrong\u003E${this.state.participantID}\u003C\u002Fstrong\u003Eです。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終了",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "appreciation"
    }
  ]
})

// Let's go!
study.run()