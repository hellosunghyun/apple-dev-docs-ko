---
source_path: "documentation/AppKit/nspopupbuttoncell/item-withtitle.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nspopupbuttoncell/item-withtitle"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:itemwithtitle:0000:0001">item(withTitle:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:itemwithtitle:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:itemwithtitle:0002:0001">지정한 제목을 가진 메뉴 항목을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:itemwithtitle:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:itemwithtitle:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func item(withTitle title: String) -> NSMenuItem?
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 제목을 가진 메뉴 항목이 메뉴에 없으면 <code>nil</code>을 반환하는 메뉴 항목입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>title</code>: 원하는 메뉴 항목의 제목입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nspopupbuttoncell/itemtitle(at:">func itemTitle(at: Int) -&gt; String</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 인덱스의 항목 제목을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001">[var itemArray: [NSMenuItem]](nspopupbuttoncell/itemarray.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">메뉴의 항목을 나타내는 <a href="nsmenuitem.md">@@TOKEN_0@@</a> 객체 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nspopupbuttoncell/numberofitems.md">var numberOfItems: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">메뉴의 항목 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nspopupbuttoncell/index(of:">func index(of: NSMenuItem) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">지정한 메뉴 항목의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nspopupbuttoncell/indexofitem(withtitle:">func indexOfItem(withTitle: String) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정한 제목을 가진 항목의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nspopupbuttoncell/indexofitem(withtag:">func indexOfItem(withTag: Int) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정한 태그를 가진 메뉴 항목의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nspopupbuttoncell/indexofitem(withrepresentedobject:">func indexOfItem(withRepresentedObject: Any?) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">지정한 represented object를 가진 메뉴 항목의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="nspopupbuttoncell/indexofitem(withtarget:andaction:">func indexOfItem(withTarget: Any?, andAction: Selector?) -&gt; Int</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">지정한 target과 action을 가진 메뉴 항목의 인덱스를 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="nspopupbuttoncell/item(at:">func item(at: Int) -&gt; NSMenuItem?</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">지정한 인덱스의 메뉴 항목을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="nspopupbuttoncell/lastitem.md">var lastItem: NSMenuItem?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">메뉴의 마지막 항목입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/appkit/nspopupbuttoncell/item(withtitle:">View on Apple Developer</a>)*</span>
