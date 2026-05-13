---
source_path: "documentation/AddressBookUI/abpersonviewcontroller/sethighlighteditemforproperty-withidentifier.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/sethighlighteditemforproperty-withidentifier"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sethighlighteditemforpropertywithidentifier:0000:0001">setHighlightedItemForProperty(_:withIdentifier:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sethighlighteditemforpropertywithidentifier:0001:0001">**Framework**: Address Book UI **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sethighlighteditemforpropertywithidentifier:0002:0001">표시된 사람의 특정 속성을 강조 표시할지 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sethighlighteditemforpropertywithidentifier:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sethighlighteditemforpropertywithidentifier:0004:0001">iOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sethighlighteditemforpropertywithidentifier:0004:0002">iPadOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sethighlighteditemforpropertywithidentifier:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setHighlightedItemForProperty(_ property: ABPropertyID, withIdentifier identifier: ABMultiValueIdentifier)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>property</code>: 강조 표시할 속성입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>identifier</code>: <code>property</code>가 다중 값 속성인 경우 강조 표시할 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="abpersonviewcontroller/addressbook.md">var addressBook: ABAddressBook?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Optional.</span> <span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0002">표시할 연락처를 가져올 주소록입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="abpersonviewcontroller/allowsactions.md">var allowsActions: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">텍스트 메시지를 보내거나 FaceTime 통화를 시작하는 등의 동작 버튼을 표시할지 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="abpersonviewcontroller/allowsediting.md">var allowsEditing: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">사용자가 사람의 정보를 편집할 수 있는지 지정합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/addressbookui/abpersonviewcontroller/sethighlighteditemforproperty(_:withidentifier:">View on Apple Developer</a>)*</span>
