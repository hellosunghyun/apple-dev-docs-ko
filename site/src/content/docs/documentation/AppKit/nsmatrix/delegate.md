---
source_path: "documentation/AppKit/nsmatrix/delegate.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/appkit/nsmatrix/delegate"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:delegate:0000:0001">delegate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0001:0001">**Framework**: AppKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0002:0001">The delegate for messages from the field editor.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:delegate:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:delegate:0004:0001">macOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
weak var delegate: (any NSMatrixDelegate)? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="nsmatrix/textshouldendediting(_:">func textShouldEndEditing(NSText) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">편집 종료 권한을 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="nsmatrix/textshouldbeginediting(_:">func textShouldBeginEditing(NSText) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">텍스트 편집을 시작할 수 있는지 요청합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="nsmatrixdelegate.md">protocol NSMatrixDelegate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001"><code>NSMatrix</code> 객체의 대리자가 구현하는 선택적 메서드를 <code>NSMatrixDelegate</code> 프로토콜이 정의합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/appkit/nsmatrix/delegate">View on Apple Developer</a>*</span>
