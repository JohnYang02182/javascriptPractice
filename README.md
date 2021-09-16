# javascriptPractice
--About some Javascript practice.

### fibonacci
基本邏輯：c = a + b，然後下一次的a是上一次的b，下一次的b是上一次的c。
為了推進設b = 1。

如果用順序的話是N從第三個以後（含） 第n個 = 第n-2個 + 第n-1個。


### debounce
基本邏輯：設定變數timeout儲存setTimeout，並在閉包內執行。
func代入console.log，delay代入不會觸發事件的秒數。

### linked list stack （後進先出）
> 用鏈結串列實作佇列，鏈結串列與陣列相異的特性：

> 元素在記憶體中不連續，與陣列相比可節省記憶體。

> 元素需要用遍例搜尋

基本邏輯：
設定類別node作為節點，內部value為存放資料，next為指向下一個node的指標。
再新增類別stack進行操作，新增first作為head，last作為tail，length作為計算資料的筆數。

#### 加入push新增節點
判斷串列內是不是已有節點
> 沒有節點：直接新增節點。
> 已有節點：新增新的節點，並將原本的節點往後推。

#### 加入pop移除節點
判斷串列內是否已有節點，若無回傳空值。
接下來判斷是否是只有一個節點，若是將last設為空值。

如果兩個判斷當不符合，將後進的node刪除，接在後面的node往前補。

### getPagination
基本邏輯：
輸入的資料：offset (資料開始位置)、limit(資料擷取長度)、total (總資料筆數)
取得的資料：currentPage (當下頁籤)、totalPage (頁面總數量)、 renderPages (顯示的頁籤範圍一次顯示五個頁籤)

在currentPage與totalPage部分沒有遇到阻礙，但在實做renderPages的時候花不少時間。

renderPages：
用Array(5).key取得鍵值與currentPage迭代出新的陣列。

