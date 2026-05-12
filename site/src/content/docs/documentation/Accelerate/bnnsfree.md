---
source_path: "documentation/Accelerate/bnnsfree.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsfree"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnsfree:0000:0001">BNNSFree</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfree:0001:0001">**Framework**: Accelerate **Kind**: typealias</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfree:0002:0001">사용자 제공 메모리 해제 함수에 대한 타입 별칭입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnsfree:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnsfree:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfree:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfree:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfree:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfree:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfree:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnsfree:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
typealias BNNSFree = (UnsafeMutableRawPointer?) -> Void
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="bnnsfilter.md">typealias BNNSFilter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">필터를 나타내는 불투명 타입입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="applying-filters.md">Applying Filters</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0002"><a href="bnns/layer.md">class Layer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">필터를 래핑하고 소멸 처리를 관리하는 레이어 객체의 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnns/unarylayer.md">class UnaryLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">단일 입력을 받는 레이어의 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnns/binarylayer.md">class BinaryLayer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">두 입력을 받는 레이어의 기본 클래스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsfilterparameters.md">struct BNNSFilterParameters</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">공통 필터 매개변수를 포함하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="bnnsfilterdestroy(_:">func BNNSFilterDestroy(BNNSFilter?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsnormalizationfilterapplybatch(_:_:_:_:_:_:_:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="bnnsalloc.md">typealias BNNSAlloc</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">사용자가 제공하는 메모리 할당 함수에 대한 타입 별칭입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsfree">View on Apple Developer</a>*</span>
