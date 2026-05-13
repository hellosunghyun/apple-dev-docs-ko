---
source_path: "documentation/AppKit/nscollectionview/scrollposition/centeredhorizontally.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscollectionview/scrollposition/centeredhorizontally"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:centeredhorizontally:0000:0001">centeredHorizontally</span>

<span class="ko-segment" data-segment-id="seg:paragraph:centeredhorizontally:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:centeredhorizontally:0002:0001">선택한 항목의 경계 상자가 컬렉션 뷰 경계 내에서 수평으로 가운데 오도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:centeredhorizontally:0002:0002">이 옵션은 <a href="nscollectionview/scrollposition/left.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/right.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/leadingedge.md">@@TOKEN_2@@</a>, <a href="nscollectionview/scrollposition/trailingedge.md">@@TOKEN_3@@</a>, <a href="nscollectionview/scrollposition/nearestverticaledge.md">@@TOKEN_4@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:centeredhorizontally:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:centeredhorizontally:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static var centeredHorizontally: NSCollectionView.ScrollPosition { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="nscollectionview/scrollposition/top.md">static var top: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">선택한 항목의 경계 상단 가장자리가 컬렉션 뷰 경계 상단 가장자리에 인접하도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0002">이 옵션은 <a href="nscollectionview/scrollposition/centeredvertically.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/bottom.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/nearesthorizontaledge.md">@@TOKEN_2@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nscollectionview/scrollposition/centeredvertically.md">static var centeredVertically: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">선택한 항목의 경계 상자가 컬렉션 뷰 경계에서 수직으로 가운데 오도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0002">이 옵션은 <a href="nscollectionview/scrollposition/top.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/bottom.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/nearesthorizontaledge.md">@@TOKEN_2@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscollectionview/scrollposition/bottom.md">static var bottom: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">선택한 항목의 경계 상단 가장자리가 컬렉션 뷰 경계의 아래쪽 가장자리에 인접하도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0002">이 옵션은 <a href="nscollectionview/scrollposition/top.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/centeredvertically.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/nearesthorizontaledge.md">@@TOKEN_2@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscollectionview/scrollposition/nearesthorizontaledge.md">static var nearestHorizontalEdge: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">선택한 항목의 경계 상자가 컬렉션 뷰의 가장 가까운 가장자리(상단 또는 하단)에 인접하도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0002">이 옵션은 <a href="nscollectionview/scrollposition/top.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/centeredvertically.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/bottom.md">@@TOKEN_2@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscollectionview/scrollposition/left.md">static var left: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">선택한 항목의 경계 상자의 왼쪽 가장자리가 컬렉션 뷰 경계의 왼쪽 가장자리에 인접하도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0002">이 옵션은 <a href="nscollectionview/scrollposition/centeredhorizontally.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/right.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/leadingedge.md">@@TOKEN_2@@</a>, <a href="nscollectionview/scrollposition/trailingedge.md">@@TOKEN_3@@</a>, <a href="nscollectionview/scrollposition/nearestverticaledge.md">@@TOKEN_4@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscollectionview/scrollposition/right.md">static var right: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">선택한 항목의 경계 상자의 오른쪽 가장자리가 컬렉션 뷰 경계의 오른쪽 가장자리에 인접하도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0002">이 옵션은 <a href="nscollectionview/scrollposition/left.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/centeredhorizontally.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/leadingedge.md">@@TOKEN_2@@</a>, <a href="nscollectionview/scrollposition/trailingedge.md">@@TOKEN_3@@</a>, <a href="nscollectionview/scrollposition/nearestverticaledge.md">@@TOKEN_4@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="nscollectionview/scrollposition/leadingedge.md">static var leadingEdge: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">선택한 항목의 경계 상자의 선행 가장자리가 컬렉션 뷰 경계의 선행 가장자리에 인접하도록 스크롤합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0002">이 옵션은 왼쪽에서 오른쪽 및 오른쪽에서 왼쪽 레이아웃을 모두 적절히 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0003">이 옵션은 <a href="nscollectionview/scrollposition/left.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/centeredhorizontally.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/right.md">@@TOKEN_2@@</a>, <a href="nscollectionview/scrollposition/trailingedge.md">@@TOKEN_3@@</a>, <a href="nscollectionview/scrollposition/nearestverticaledge.md">@@TOKEN_4@@</a> 옵션과 함께 사용할 수 없지만, 다른 옵션과는 결합할 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="nscollectionview/scrollposition/trailingedge.md">static var trailingEdge: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Scroll so that the trailing edge of the selected items’ bounding box is adjacent to the trailing edge of the collection view’s bounds.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0002">Use this option to support both left-to-right and right-to-left layouts appropriately.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0003">This option must not be combined with the <a href="nscollectionview/scrollposition/left.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/centeredhorizontally.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/right.md">@@TOKEN_2@@</a>, <a href="nscollectionview/scrollposition/leadingedge.md">@@TOKEN_3@@</a>, or <a href="nscollectionview/scrollposition/nearestverticaledge.md">@@TOKEN_4@@</a> options, but may be combined with other options.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="nscollectionview/scrollposition/nearestverticaledge.md">static var nearestVerticalEdge: NSCollectionView.ScrollPosition</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Scroll so that the bounding box is adjacent to the nearest edge (leading or trailing) of the collection view.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0002">Use this option to support both left-to-right and right-to-left layouts appropriately.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0003">This option must not be combined with the <a href="nscollectionview/scrollposition/left.md">@@TOKEN_0@@</a>, <a href="nscollectionview/scrollposition/centeredhorizontally.md">@@TOKEN_1@@</a>, <a href="nscollectionview/scrollposition/right.md">@@TOKEN_2@@</a>, <a href="nscollectionview/scrollposition/leadingedge.md">@@TOKEN_3@@</a>, or <a href="nscollectionview/scrollposition/trailingedge.md">@@TOKEN_4@@</a> options, but may be combined with other options.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/appkit/nscollectionview/scrollposition/centeredhorizontally">View on Apple Developer</a>*</span>
