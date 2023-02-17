import "./styles.css";

const LIST_CLASS = "list-low";
/**
 * TODO追加時の処理
 * 入力ボックスを空にする。
 * 未完了のTODOに要素を追加。
 */
const onClickAdd = () => {
  //テキストボックスの値を取得して空にする。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //要素を生成
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.className = LIST_CLASS;

  const p = document.createElement("p");
  p.textContent = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    onClickComplete();
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    onClickDelete();
  });

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  li.appendChild(div);

  console.log(li);
  //未完了のTODOに要素を追加
  document.getElementById("imcomplete-list").appendChild(li);

  console.log(document.getElementById("imcomplete-list"));
};

const onClickComplete = () => {
  alert("完了したよ");
};

const onClickDelete = () => {
  alert("削除したよ");
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
