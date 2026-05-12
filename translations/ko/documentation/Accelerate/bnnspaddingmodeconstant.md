---
source_path: "documentation/Accelerate/bnnspaddingmodeconstant.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnspaddingmodeconstant"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnspaddingmodeconstant:0000:0001">BNNSPaddingModeConstant</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnspaddingmodeconstant:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnspaddingmodeconstant:0002:0001">패딩 동작이 패딩된 영역을 지정된 상수로 채운다는 것을 나타내는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnspaddingmodeconstant:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnspaddingmodeconstant:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspaddingmodeconstant:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspaddingmodeconstant:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspaddingmodeconstant:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspaddingmodeconstant:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspaddingmodeconstant:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnspaddingmodeconstant:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BNNSPaddingModeConstant: BNNSPaddingMode { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">예를 들어, 다음의 패딩 크기와 입력이 주어졌을 때:</span>

```swift
let paddingSize = (2, 4)

let source: [Float] = [ 0, 1, 2, 3, 4, 5, 7, 8, 9 ]

var destination = [Float](repeating: 0,
                          count: source.count + paddingSize.0 + paddingSize.1)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001"><a href="bnnspaddingmodeconstant.md">@@TOKEN_0@@</a> 및 패딩 값이 <code>99</code>인 패딩 작업은 <code>destination</code>을 다음 값으로 채웁니다:</span>

```swift
[99.0, 99.0, 0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 7.0, 8.0, 9.0, 99.0, 99.0, 99.0, 99.0]
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="bnnspaddingmode/init(_:">init(UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0002"><a href="bnnspaddingmode/init(rawvalue:">init(rawValue: UInt32)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0003"><a href="bnnspaddingmode/rawvalue.md">var rawValue: UInt32</a></span>
- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0004"><a href="bnnspaddingmodereflect.md">var BNNSPaddingModeReflect: BNNSPaddingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">패딩 작업이 홀수 대칭(odd-symmetric) 패턴을 형성하도록 패딩 영역을 채우는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="bnnspaddingmodesymmetric.md">var BNNSPaddingModeSymmetric: BNNSPaddingMode</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">패딩 작업이 짝수 대칭(even-symmetric) 패턴을 형성하도록 패딩 영역을 채우는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnspaddingmodeconstant">View on Apple Developer</a>*</span>
