---
source_path: "documentation/Accelerate/bnns/losslayer/init-inputoutputlossfunctionlossreductionfilterparameters.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/losslayer/init-inputoutputlossfunctionlossreductionfilterparameters"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initinputoutputlossfunctionlossreductionfilterparameters:0000:0001">init(input:output:lossFunction:lossReduction:filterParameters:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinputoutputlossfunctionlossreductionfilterparameters:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinputoutputlossfunctionlossreductionfilterparameters:0002:0001">새 손실 레이어를 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initinputoutputlossfunctionlossreductionfilterparameters:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initinputoutputlossfunctionlossreductionfilterparameters:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputoutputlossfunctionlossreductionfilterparameters:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputoutputlossfunctionlossreductionfilterparameters:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputoutputlossfunctionlossreductionfilterparameters:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputoutputlossfunctionlossreductionfilterparameters:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputoutputlossfunctionlossreductionfilterparameters:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initinputoutputlossfunctionlossreductionfilterparameters:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
convenience init?(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, lossFunction: BNNS.LossFunction, lossReduction: BNNS.LossReduction, filterParameters: BNNSFilterParameters? = nil)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">❗ **중요**: 입력 데이터 타입과 출력 데이터 타입은 <code>float</code>여야 합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002">축소가 <a href="bnns/lossreduction/none.md">@@TOKEN_0@@</a> 가 아닌 경우를 제외하고 출력 크기는 <code>1</code>이어야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>input</code>: 입력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>output</code>: 출력의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>lossFunction</code>: 손실 계산에 사용되는 함수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>lossReduction</code>: 계산된 손실을 축소하는데 사용되는 함수입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0005"><code>filterParameters</code>: 필터 런타임 매개변수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/losslayer/init(input:output:lossfunction:lossreduction:filterparameters:">Apple Developer에서 보기</a>)*</span>
