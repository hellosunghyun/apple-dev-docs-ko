---
source_path: "documentation/AppKit/nscell/cellattribute.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nscell/cellattribute"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:cellattribute:0000:0001">cellAttribute(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cellattribute:0001:0001">**Framework**: AppKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cellattribute:0002:0001">지정한 셀 속성의 값을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:cellattribute:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:cellattribute:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func cellAttribute(_ parameter: NSCell.Attribute) -> Int
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>aParameter</code>로 지정된 셀 속성의 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>parameter</code>: 값을 가져올 셀 속성입니다. 속성에는 수신자의 현재 상태와 비활성화, 편집 가능, 하이라이트 여부가 포함됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nscell/setcellattribute(_:to:">func setCellAttribute(NSCell.Attribute, to: Int)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정한 셀 속성의 값을 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="nscell/type.md">var type: NSCell.CellType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">셀의 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="nscell/isenabled.md">var isEnabled: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">셀의 현재 활성화 여부를 나타내는 Boolean 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="nscell/allowsundo.md">var allowsUndo: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">셀이 실행 취소 작업을 처리할 책임이 있는지 나타내는 Boolean 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">*<a href="https://developer.apple.com/documentation/appkit/nscell/cellattribute(_:">View on Apple Developer</a>)*</span>
