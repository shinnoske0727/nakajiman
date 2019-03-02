/*
  // format
  {
    name: 'イラスト',
    category: 'illustration',
    layout: 'picture', // article は画像+テキスト, pictureは画像のみ
    id: 1,
    explain: '説明'
    top: {
      kv: "path"
    },
    works: {
      kv: "path",
      pic: [paths]
    }
    link: ""
  }
*/

export const dammyData = [
    {
        name: 'Sail',
        category: 'ui',
        layout: 'article',
        id: 1,
        explain: `面白法人カヤックのグループ会社であるHelteが運営する、オンライン日本語教育サービス「Sail」の UI / Graphic デザインを担当しました。

「Sail」は日本の高齢者が先生となり、日本語を勉強している海外の学生と日本語でビデオチャットをしながら日本の文化や歴史、経験や知恵を伝えていく日本語教育サービスです。

日本の高齢者と海外の学生という全く異なる2種類のユーザーに対して、それぞれ適切な情報設計を行い体験を損ねないよう心がけました。ITリテラシーの低い日本の高齢者に対しては、何度も高齢者施設に通ってユーザーテストを行い、フォントサイズやボタンの大きさ等、とことんユーザビリティにこだわり、海外の学生に対しては、彼らが日常的に使っているアプリを調査・ヒアリングし、彼らのメンタルモデルに齟齬をきたすことのないよう設計しました。`,
        top: {
            kv: 'sail_SP_thumb.jpg'
        },
        works: {
            kv: 'sail_PC_thumb.jpg',
            pic: [
                'sail/01.jpg',
                'sail/02.jpg',
                'sail/03.gif',
                'sail/04.gif',
                'sail/05.gif',
                'sail/06.gif'
            ]
        },
        link: 'https://sail.helte.jp/guide/'
    },
    {
        name: 'JOYNT',
        category: 'ui',
        layout: 'article',
        id: 2,
        explain: `バンダイナムコエンターテインメントがリリース予定だったゲームプラットフォームサービス「JOYNT」の UI / Graphic デザインを担当しました。

リリース直前でバンナム社の社内事情によりプロジェクトが凍結されてしまった非常に心残りのあるプロダクトです。「多種多様な繋がり」をコンセプトに、バンナム社の自社IP作品をPCで購入・プレイできるだけでなく、動画・画像・コメント投稿等、ユーザー同士のコミュニケーション機能にも注力しました。

「エニアグラム」と呼ばれる性格分類の図式を使用した独自のユーザーマッチングシステムで、自分と相性のいいユーザーを見つけやすくなっています。「Steam」や「Origin」のような競合サービスと比べても遜色のないようなデザインを目指して制作しました。`,
        top: {
            kv: 'BNE_SPthumb.jpg'
        },
        works: {
            kv: 'BNE_PCthumb.jpg',
            pic: [
                'joint/01.jpg',
                'joint/02.jpg',
                'joint/03.jpg',
                'joint/04.jpg',
                'joint/05.jpg'
            ]
        },
        link: ''
    },
    {
        name: '東武線アプリ',
        category: 'ui',
        layout: 'article',
        id: 3,
        explain: `東武鉄道の列車運行情報や利用駅の発車時刻、列車走行位置などを確認できる「東武線アプリ」の UI / Graphic デザインを担当しました。

クライアントから「とにかく見た目をかっこよくして欲しい」との要望があり、社内でデザインコンペを行なった結果、私のデザインが選ばれそのまま本プロジェクトのリードデザイナーにアサインされることになりました。

「競合他社の路線アプリと圧倒的差をつけること」「クライアントの想像以上のクオリティを担保すること」「それでいてユーザビリティを損ねないこと」これら3点に留意しながらデザインを行い、暗めのトーンの背景と東武線の各路線カラー・列車種別カラーを使ったUIパーツのコントラストが特徴的なデザインに仕上がりました。UI面では、ユーザーの通勤・通学中での利用を最重要視し、そのストーリーに当てはまる機能をタブバーの左からタイムライン状に配置するなど、路線アプリに多く見受けられる不要な情報の取捨選択と優先順位付けを徹底しながら設計しました。`,
        top: {
            kv: 'tobu_SPthumb.jpg'
        },
        works: {
            kv: 'tobu_PCthumb.jpg',
            pic: ['tobu/01.jpg', 'tobu/02.jpg', 'tobu/03.jpg']
        },
        link: ''
    },
    {
        name: 'Lobi Tournament',
        category: 'ui',
        layout: 'article',
        id: 4,
        explain: `カヤックが運営するゲームトーナメントプラットフォーム「Lobi Tournament」の運用とそれに付随する公式イベントやオフ会の生放送素材・グッズ制作を担当しています。

「ゲーム大会を、もっと簡単に。」をコンセプトに、参加者の募集からトーナメントの進行対応まで、円滑に管理することができます。

前任のデザイナーから運用業務を引き継ぎ、UIの改善を行なっていますが、サービスの方針がBtoBにシフトしてきたため、大会を主催するクライアント向けの制作業務の方が増えてきています。`,
        top: {
            kv: 'lobito_SPthumb.jpg'
        },
        works: {
            kv: 'lobito_PCthumb.jpg',
            pic: [
                'lobito/01.jpg',
                'lobito/02.jpg',
                'lobito/03.jpg',
                'lobito/04.jpg'
            ]
        },
        link: ''
    },
    {
        name: 'Mirrativ',
        category: 'ui',
        layout: 'article',
        id: 5,
        explain: `Mirrativの前任のデザイナーからのご紹介で開発をお手伝いすることになり、新機能であるギフト機能のコインデザインとコイン購入フローのUIデザイン、そしてバナー制作をやらせていただきました。

コインをデザインする際、「エンタメ感を強くしてほしい」との要望があったため、あえてフラットデザインにはせず、ゲーム等で使用されるようなスキュアモーフィズムグラフィックにしました。`,
        top: {
            kv: 'mirrativ_SPthumb.jpg'
        },
        works: {
            kv: 'mirrativ_PCthumb.jpg',
            pic: ['mirrativ/01.jpg', 'mirrativ/02.jpg', 'mirrativ/03.jpg']
        },
        link: ''
    },
    {
        name: 'ワン！アイデア',
        category: 'web',
        layout: 'article',
        id: 6,
        explain: `毎年カヤックでは、お世話になったクライアントへの新年の挨拶メールの中にお年賀プロジェクトと呼ばれるWebコンテンツを掲載するのが恒例になっています。私は、2018年度のお年賀プロジェクトである「ワン！アイデア」のUIデザインを担当しました。

カヤックの文化であるブレストをアイデア犬ワンディと一緒に体験できるWebコンテンツとなっています。`,
        top: {
            kv: 'oneidea_SPthumb.jpg'
        },
        works: {
            kv: 'oneidea_PCthumb.jpg',
            pic: ['one_idea/01.jpg', 'one_idea/02.jpg', 'one_idea/03.jpg']
        },
        link: 'google.com'
    },
    {
        name: 'A-CHARA Maker',
        category: 'web',
        layout: 'article',
        id: 7,
        explain: `「旭硝子」から「AGC」に社名変更をした、AGC株式会社の110周年を記念して、従業員向けサイトの企画制作・運用をカヤックでお手伝いしました。その中で私は、AGC従業員のキャラクターを作成できるメーカーサイト「A-CHARA Maker」の UI / Graphic デザインを担当しました。

110周年記念として先に公開されていた「CH110番組サイト」のトンマナを踏襲してロゴをデザインし、5万人近くいるAGCの従業員全員が笑顔で集まれる、緑あふれる広大な公園をイメージしてサイトをデザインしました。`,
        top: {
            kv: 'a_chara_SPthumb.jpg'
        },
        works: {
            kv: 'a_chara_PCthumb.jpg',
            pic: ['a_chara/01.jpg', 'a_chara/02.jpg', 'a_chara/03.jpg']
        },
        link: ''
    },
    {
        name: 'UTGP2018',
        category: 'web',
        layout: 'article',
        id: 8,
        explain: `毎年恒例であるユニクロによるTシャツデザインコンペティション「UT GRAND PRIX」。その13回目となるMARVELをテーマにした「UTGP2018」のWebサイトの UI / Graphic デザインを担当しました。

20ヶ国語対応のため、全ての言語で成立するようなレイアウトを徹底しデザインしました。`,
        top: {
            kv: 'UTGP_SPthumb.jpg'
        },
        works: {
            kv: 'UTGP_PCthumb.jpg',
            pic: ['utgp/01.jpg']
        },
        link: ''
    },
    {
        name: 'キン肉マン マッスルショット',
        category: 'web',
        layout: 'article',
        id: 9,
        explain: `カヤックとDeNAの協業タイトルである「キン肉マン マッスルショット」のキャンペーンサイトの UI / Graphic デザインを担当しました。

ユーザーに違和感を与えないようゲームのトンマナを尊重し、ロゴや背景に使われている氷の描き込み一つ一つにこだわって制作しました。`,
        top: {
            kv: 'niku_SPthumb.jpg'
        },
        works: {
            kv: 'niku_PCthumb.jpg',
            pic: ['kinniku/01.jpg', 'kinniku/02.jpg']
        },
        link: ''
    },
    {
        name: 'キングダムダービー',
        category: 'web',
        layout: 'article',
        id: 10,
        explain: `JRA第84回日本ダービーとアニメ『キングダム』がコラボレーションした3つのWEBコンテンツ「キングダムダービー」の企画と制作をカヤックでお手伝いしました。その中で私は、クイズゲーム「東京競馬場からの奪還」のUIデザインを担当しました。

50以上のクイズゲームのリサーチを行った上で情報設計を行い、そこからアートディレクターのディレクションに従いデザインを制作しました。その他にもゲーム内で使用されるSEの収集など、制作業務は多岐に渡りました。`,
        top: {
            kv: 'kingdom_SPthumb.jpg'
        },
        works: {
            kv: 'kingdom_PCthumb.jpg',
            pic: ['kingdam/01.jpg', 'kingdam/02.jpg']
        },
        link: ''
    },
    {
        name: 'HELLO NEW ODAKYU!',
        category: 'web',
        layout: 'article',
        id: 11,
        explain: `小田急電鉄の複々線化事業サイト「HELLO NEW ODAKYU!」のUIデザインを担当しました。

第1弾~第4弾と、サイトの改修を複数回行う想定だったため、アートディレクターと議論を重ね、更新のしやすいサイト構成にしました。`,
        top: {
            kv: 'odakyu_SPthumb.jpg'
        },
        works: {
            kv: 'odakyu_PCthumb.jpg',
            pic: ['odakyu/01.jpg']
        },
        link: ''
    },
    {
        name: '鎌倉自宅葬儀社',
        category: 'web',
        layout: 'article',
        id: 12,
        explain: `カヤックのグループ会社である「鎌倉自宅葬儀社」のコーポレートサイトのUIデザインを担当しました。

鎌倉自宅葬儀社は日本初の「自宅葬」に特化した葬儀社です。アートディレクターがディレクションしたロゴとトンマナを咀嚼し、UIデザインに落とし込んでいきました。`,
        top: {
            kv: 'kamakura_SPthumb.jpg'
        },
        works: {
            kv: 'kamakura_PCthumb.jpg',
            pic: ['kamakura/01.jpg']
        },
        link: ''
    },
    {
        name: '社内勉強会',
        category: 'web',
        layout: 'article',
        id: 13,
        explain: `社内デザイナー向けの勉強会を開催し、知見の共有を定期的に行なっています。

勉強会のテーマは、「勉強会で得た知見で職場環境の問題をどれだけ解決できるか？」を念頭に置いて選んでいます。

例えば、Zeplinの勉強会はカヤック受託事業部の残業時間の問題を解決するために開催しました。受託事業部にはDTP出身のデザイナーが多くWebの知識が浅いため、必要以上に重くレイヤーが整理されていないPSDファイルをそのままエンジニアに渡して余計な作業を発生させてしまい、それが残業時間の増加に繋がっていました。

そういった職場環境の問題解決こそがクリエイティブを発揮するためのベストプラクティスなので、これからも社内勉強会を定期的に開催していく予定です。`,
        top: {
            kv: 'study_SPthumb.jpg'
        },
        works: {
            kv: 'study_PCthumb.jpg',
            pic: ['study/01.jpg', 'study/02.jpg']
        },
        link: ''
    },
    {
        name: 'Lobiのナオミ',
        category: 'illustration',
        layout: 'picture',
        id: 14,
        explain: ``,
        top: {
            kv: ''//naomi_PCthumb.jpg'
        },
        works: {
            kv: 'naomi_PCthumb.jpg',
            pic: []
        },
        link: ''
    },
  {
    name: '漫画名刺イラスト',
    category: 'illustration',
    layout: 'picture',
    id: 15,
    explain: ``,
    top: {
      kv: ''//manga_SPthumb.jpg'
    },
    works: {
      kv: 'manga_PCthumb.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: 'Lobi Banner',
    category: 'illustration',
    layout: 'picture',
    id: 16,
    explain: ``,
    top: {
      kv: ''//Lobibnr_SPthumb.jpg'
    },
    works: {
      kv: 'Lobibnr_PCthumb.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: 'ニライビーチ',
    category: 'photograph',
    layout: 'picture',
    id: 17,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '16_PCthumb.jpg',
      detail: '16/01.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: '瀬長島',
    category: 'photograph',
    layout: 'picture',
    id: 18,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '17_PCthumb.jpg',
      detail: '17/01.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: '瀬長島',
    category: 'photograph',
    layout: 'picture',
    id: 19,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '18_PCthumb.jpg',
      detail: '18/01.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: '支笏湖',
    category: 'photograph',
    layout: 'picture',
    id: 20,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '19_PCthumb.jpg',
      detail: '19/01.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: '草津温泉',
    category: 'photograph',
    layout: 'picture',
    id: 21,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '20_PCthumb.jpg',
      detail: '20/01.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: '草津温泉',
    category: 'photograph',
    layout: 'picture',
    id: 22,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '21_PCthumb.jpg',
      detail: '21/01.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: '沖縄美ら海水族館',
    category: 'photograph',
    layout: 'picture',
    id: 23,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '22_PCthumb.jpg',
      detail: '22/01.jpg',
      pic: []
    },
    link: ''
  },
  {
    name: 'マクセル アクアパーク品川',
    category: 'photograph',
    layout: 'picture',
    id: 24,
    explain: ``,
    top: {
      kv: ''//kingdom_spthumb.jpg'
    },
    works: {
      kv: '23_PCthumb.jpg',
      detail: '23/01.jpg',
      pic: []
    },
    link: ''
  },
]
