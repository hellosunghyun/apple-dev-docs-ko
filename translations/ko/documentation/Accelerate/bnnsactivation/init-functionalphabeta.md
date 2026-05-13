---
source_path: "documentation/Accelerate/bnnsactivation/init-functionalphabeta.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsactivation/init-functionalphabeta"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initfunctionalphabeta:0000:0001">init(function:alpha:beta:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfunctionalphabeta:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfunctionalphabeta:0002:0001">Returns a new common activation function parameters structure that uses the specified function, alpha, and beta.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfunctionalphabeta:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initfunctionalphabeta:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfunctionalphabeta:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfunctionalphabeta:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfunctionalphabeta:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfunctionalphabeta:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfunctionalphabeta:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initfunctionalphabeta:0004:0007">watchOS 3.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(function: BNNSActivationFunction, alpha: Float = .nan, beta: Float = .nan)
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A new common activation function parameters structure.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>function</code>: The activation function to use.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>alpha</code>: The parameter for the alpha of the activation function.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>beta</code>: The parameter for the beta of the activation function.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="bnnsactivation/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">영화 파일 콘텐츠의 편곡가 이름을 나타내는 식별자입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/quicktimeuserdataartist.md">static let quickTimeUserDataArtist: AVMetadataIdentifier</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">영화 파일 콘텐츠의 아티스트 이름을 나타내는 식별자입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">영화 파일 콘텐츠의 저자 이름을 나타내는 식별자입니다.</span>
