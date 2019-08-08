// ページ読み込み時
Sys(function () {

    /**
    * 選択必須ではないラジオボタンのイベント操作
    * 
    * name属性：_nos_per_group_noと部分一致
    * type属性：radio（ラジオボタン）
    * data-required-flag属性：false（選択必須ではない）
    */
    Sys('input[name*=_nos_per_group_no][type=radio][data-required-flag!=1]').click(function(event){
  
      // フォーム要素のdata-is-checked属性を取得する
      var isChecked = Sys(this).attr('data-is-checked');
  
      // クリックしたチェックボックスのnameを取得（セレクタに使用する為、[]はエスケープ）
      var thisName = (Sys(this).attr("name")).replace(/[\[\]]/g, '\\$&');
  
      // クリックしたチェックボックスが所属するform配下（※）の、nameが同一のラジオボタンのdata-is-checked属性を除去する
      // ※商品検索ページ内に機能パーツ（商品検索）がある場合に、２つのformのチェックボックスが全て対象になってしまうことを避けるため
      Sys(this).parents('form').find('input[name=' + thisName + '][type=radio]').removeAttr('data-is-checked');
  
      // 2回目タップの場合
      if (isChecked !== undefined) {
  
        // 選択解除する
        Sys(this).attr('checked', false);
  
      } else {
  
        // フォーム要素にdata-is-checked属性を追加する
        Sys(this).attr('data-is-checked', '');
      }
    });
  
    /**
    * 選択必須チェックボックスをクリック時のイベント操作
    * 
    * name属性：_nos_per_group_noと部分一致
    * type属性：checkbox（チェックボックス）
    * data-required-flag属性：true（選択必須）
    */
    Sys('input[name*=_nos_per_group_no][type=checkbox][data-required-flag=1]').click(function(event){
  
      // クリックしたチェックボックスのnameを取得（セレクタに使用する為、[]はエスケープ）
      var thisName = (Sys(this).attr("name")).replace(/[\[\]]/g, '\\$&');
  
      // クリックしたチェックボックスが所属するform配下（※）の、nameが同一のチェックボックスが全て解除状態の場合
      // ※商品検索ページ内に機能パーツ（商品検索）がある場合に、２つのformのチェックボックスが全て対象になってしまうことを避けるため
      if ((Sys(this).parents('form').find('input[name=' + thisName + '][type=checkbox]:checked')).length === 0) {
        
        // クリックしたチェックボックスを選択状態にする
        Sys(this).prop('checked', true);
      }
    });
  });
