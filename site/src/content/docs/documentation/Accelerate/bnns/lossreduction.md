---
source_path: "documentation/Accelerate/bnns/lossreduction.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnns/lossreduction"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnslossreduction:0000:0001">BNNS.LossReduction</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossreduction:0001:0001">**Framework**: Accelerate **Kind**: enum</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossreduction:0002:0001">손실 축소 함수를 설명하는 열거형입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnslossreduction:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnslossreduction:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossreduction:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossreduction:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossreduction:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossreduction:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossreduction:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnslossreduction:0004:0007">watchOS 7.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
enum LossReduction
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:loss-reduction-functions:0008:0001">손실 축소 함수</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-reduction-functions:0009:0001"><a href="bnns/lossreduction/none.md">BNNS.LossReduction.none</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-reduction-functions:0010:0001">축소를 수행하지 않고 손실을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-reduction-functions:0011:0001"><a href="bnns/lossreduction/reductionmean.md">BNNS.LossReduction.reductionMean</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-reduction-functions:0012:0001">배치의 모든 샘플 손실을 합산한 다음 샘플 수로 나눕니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-reduction-functions:0013:0001"><a href="bnns/lossreduction/sum.md">BNNS.LossReduction.sum</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-reduction-functions:0014:0001">배치의 모든 샘플 손실을 합산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-reduction-functions:0015:0001"><a href="bnns/lossreduction/weightedmean.md">BNNS.LossReduction.weightedMean</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-reduction-functions:0016:0001">배치의 모든 샘플 손실을 합산하고 모든 가중치 합계로 나눕니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:loss-reduction-functions:0017:0001"><a href="bnns/lossreduction/zeroweightmean.md">BNNS.LossReduction.zeroWeightMean</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:loss-reduction-functions:0018:0001">배치의 모든 샘플 손실을 합산하고 0이 아닌 가중치 개수로 나눕니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:instance-properties:0019:0001">인스턴스 속성</span>

- <span class="ko-segment" data-segment-id="seg:list:instance-properties:0020:0001"><a href="bnns/lossreduction/bnnslossreductionfunction.md">var bnnsLossReductionFunction: BNNSLossReductionFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:instance-properties:0021:0001">기본 손실 축소 함수 구조입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0022:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0023:0001">준수</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0001"><a href="../Swift/Copyable.md">Copyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0002"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0003"><a href="../Swift/Escapable.md">Escapable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0024:0004"><a href="../Swift/Hashable.md">Hashable</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:conforms-to:0026:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnns/lossreduction">View on Apple Developer</a>*</span>
