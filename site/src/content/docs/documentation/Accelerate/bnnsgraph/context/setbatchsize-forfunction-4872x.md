---
source_path: "documentation/Accelerate/bnnsgraph/context/setbatchsize-forfunction-4872x.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnsgraph/context/setbatchsize-forfunction-4872x"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setbatchsizeforfunction:0000:0001">setBatchSize(_:forFunction:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setbatchsizeforfunction:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setbatchsizeforfunction:0002:0001">그래프의 배치 크기를 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setbatchsizeforfunction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setbatchsizeforfunction:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setbatchsizeforfunction:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setbatchsizeforfunction:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:setbatchsizeforfunction:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setbatchsizeforfunction:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setbatchsizeforfunction:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:setbatchsizeforfunction:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setBatchSize(_ batchSize: Int, forFunction function: String? = nil) async
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이는 <code>setDynamicShapes(_:forFunction:)</code>의 특수한 경우로, 동적 크기가 텐서의 첫 번째 인덱스(즉 배치 차원)에서만 발생하고 모두 동일합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">단일 <code>batchSize</code> 상수만 전달하면 됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>batchSize</code> 값이 0보다 작으면 이 함수는 영향을 주지 않습니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**참고**: <code>BNNSGraphContextSetBatchSize</code></span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>batchSize</code>: 배치 크기입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0002"><code>function</code>: 형상을 설정할 특정 함수입니다. 함수가 하나만 있는 경우에는 <code>nil</code>로 지정할 수 있습니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0014:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnsgraph/context/setbatchsize(_:forfunction:">Apple Developer에서 보기</a>-4872x)*</span>
