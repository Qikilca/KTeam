# material-ui ドキュメント

## Componentについて

MUIはComponentsと呼ばれる様々な部品が存在する。

Componentsの種類

* INPUTS
  * 入力に関するコンポーネントの分類
  * テキストフィールドやボタン等の何かしらユーザーが操作するものが分類される
* DATA DISPLAY
  * その名の通りデータの表示に用いられる
  * アバターアイコンやリスト、テーブル等のデータを表示する時に使うものが分類される
* FEEDBACK
  * ユーザーにアラートやローディング用のspinner（スピナー）と呼ばれる物が分類される
  * ユーザーへ何らかの状態を伝えるときに用いられることが多い
* SURFACES
  * アコーディオンやカード等の、表示の仕方に関するものが分類される
  * デザインに結構関わってくるので内容が複雑になりがち
* NAVIGATION
  * HTMLでも存在するナビゲーションに近く選択肢て表示する内容を変更するものが分類される
  * ページ選択やパンくずリストも分類されている
* LAYOUT
  * その名の通りレイアウトに関するものが分類される
  * ContainerやGrid等の基本に関する内容が多い
* UTILS
  * ユーティリティと呼ばれるもの達
  * 使いやすさや分かりやすさを向上させてくれるものが多い
* DATA GRID
  * 拡張性の高いデータテーブルのグリッド系がある
  * 内容が豊富すぎて正直よく分からないが、管理画面系に使うレベルの無制限レベルのデータを取り扱えるらしい

## Component APIについて

MUIで使われるコンポーネントは基本的に以下の用に使われる。

```javascript
<Button variant="contained" disableElevation> Disable elevation </Button>
```

この場合、Buttonタグ自体がコンポーネント本体でありその中に書くHTMLでいう属性のようなものは、コンポーネントの設定を変更するためのprop(プロパティ)である。
propを指定してAPIを利用するイメージ。

propの指定のし方は多数ある。
上記を例にすると、propを指定した後に値を入れなければならないものもあるが、指定しただけで使えるものもある。

その他詳しい内容はMUIのドキュメントのAPIはComponent APIでそれぞれ調べることができる

以下よく使うコンポーネントについて軽く解説する。

## Containerについて

MUIにおけるContainerは、コンテンツを水平や中央に表示するために使われる基本のコンポーネント。
入れ子にすることもできるらしいが実際に使うことは殆どないらしい。
基本的には一番最初に使うコンポーネントでもある。が、Gridにcontainerというpropが用意されており、実質そこでも指定できる。
```javascript
<Container maxWidth ="sm">
  //ページ内容…

</Container>
```

## Gridについて

画面をレスポンシブ対応に表示する為のレイアウトコンポーネントで、レイアウトの一貫性を保ってくれる。
BootStrapと同じく、画面を12分割してそれぞれに表示させることができる。
12分割されたものはcolumn（列）と呼ばれ、それぞれ画面の大きさによって指定することができる。その性質上、基本的にはcolumnは1～12の整数しか使えないため注意が必要。(ただしcolmnsというAPIを使えば変更できる)
```javascript
//一列目
<Grid container direction={"column"} alignItems={"center"}>
  <Grid item xs={12}>
    "direction="column" alignItems="center"
  </Grid>
</Grid>

//2列目
<Grid container justifyContent={"center"}>
  <Grid item xs={4}>
    <Button variant="contained" disableElevation fullWidth>
      Disable elevation
    </Button>
  </Grid>
  
  <Grid item xs={4}>
    <Button variant="contained" disableElevation fullWidth 
      onClick={() => {
        alert('clicked');
      }}
      >
        Click me
    </Button>
  </Grid>
</Grid>
```

ButtonコンポーネントにfullWidthのpropを追加すると、Gridで指定したcolmun全てを埋め尽くすようになる。
MUIは文字数によってボタンの大きさが変わるため、大きさを固定したい場合はfullWidthを指定するとよい。

## よく出てくるpropsについて

関数に使う引数として使う文字で「プロパティ」の意味を持つ。
Component APIの使用に使うため使用頻度は高い。

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
};
```
propsだけでは値は分からないのでタグの中に渡したい値を指定する。
その際に指定する物がpropと呼ばれるものである。以下の場合nameがpropである。

```javascript
<Welcome name="TARO" ></Welcome>
```
するとReactは勝手にnameという変数名をWelcom関数のprops.nameに入れてくれるので表示されるときは人の名前が出てくる

また以下のようにして変数を使うこともできる
```javascript
const userName = "Taro"
<Welcome name={userName}></Welcome>
```