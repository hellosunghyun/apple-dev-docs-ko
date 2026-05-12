---
source_path: "documentation/Accelerate/bnnscomputenormbackward.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/bnnscomputenormbackward"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:bnnscomputenormbackward:0000:0001">BNNSComputeNormBackward(_:_:_:_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnscomputenormbackward:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnscomputenormbackward:0002:0001">compute norm 함수의 그라디언트를 역전파합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:bnnscomputenormbackward:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:bnnscomputenormbackward:0004:0001">iOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscomputenormbackward:0004:0002">iPadOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscomputenormbackward:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscomputenormbackward:0004:0004">macOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscomputenormbackward:0004:0005">tvOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscomputenormbackward:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:bnnscomputenormbackward:0004:0007">watchOS 8.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BNNSComputeNormBackward(_ in: UnsafeRawPointer, _ in_delta: UnsafeMutablePointer<BNNSNDArrayDescriptor>, _ out: UnsafeRawPointer, _ out_delta: UnsafePointer<BNNSNDArrayDescriptor>, _ norm_type: BNNSNormType, _ axis_flags: UInt32) -> Int32
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>target_desc</code>: The descriptor—which is either an input query, key, or value, or an output—of the main target of the operation.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>weights</code>: The descriptor of the initial projection’s weights.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>bias</code>: The descriptor of the initial projection’s bias.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0004"><code>out_delta</code>: 출력 델타의 디스크립터입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0005"><code>norm_type</code>: 노름의 유형입니다. 이 함수는 <a href="bnnsl2norm.md">@@TOKEN_1@@</a>만 지원합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0006"><code>axis_flags</code>: 함수가 노름 계산에 사용하는 차원입니다. <code>0</code>으로 설정하면 모든 차원을 대상으로 노름을 계산함을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[static func computeNorm(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?) throws](bnns/computenorm(input:output:axes:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">유클리드 노름을 계산하고 그 결과를 출력 텐서에 기록합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001">[static func computeNormBackward(input: BNNSNDArrayDescriptor, output: BNNSNDArrayDescriptor, axes: [Int]?, outputGradient: BNNSNDArrayDescriptor, generatingInputGradient: BNNSNDArrayDescriptor) throws](bnns/computenormbackward(input:output:axes:outputgradient:generatinginputgradient:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">compute norm 함수의 그라디언트를 역전파합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="bnnscomputenorm(_:_:_:_:">func BNNSComputeNorm(UnsafeMutablePointer&lt;BNNSNDArrayDescriptor&gt;, UnsafePointer&lt;BNNSNDArrayDescriptor&gt;, BNNSNormType, UInt32) -&gt; Int32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 텐서 전체 또는 지정된 축에서 노름을 계산합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="bnnsnormtype.md">struct BNNSNormType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">노름 유형을 설명하는 상수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/bnnscomputenormbackward(_:_:_:_:_:_:">View on Apple Developer</a>)*</span>
