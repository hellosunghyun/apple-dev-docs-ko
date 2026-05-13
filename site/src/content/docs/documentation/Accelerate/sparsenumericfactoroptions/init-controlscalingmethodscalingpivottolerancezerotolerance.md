---
source_path: "documentation/Accelerate/sparsenumericfactoroptions/init-controlscalingmethodscalingpivottolerancezerotolerance.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsenumericfactoroptions/init-controlscalingmethodscalingpivottolerancezerotolerance"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initcontrolscalingmethodscalingpivottolerancezerotolerance:0000:0001">init(control:scalingMethod:scaling:pivotTolerance:zeroTolerance:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcontrolscalingmethodscalingpivottolerancezerotolerance:0001:0001">**Framework**: Accelerate **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcontrolscalingmethodscalingpivottolerancezerotolerance:0002:0001">Returns a new numeric factor options structure with the specified properties.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcontrolscalingmethodscalingpivottolerancezerotolerance:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initcontrolscalingmethodscalingpivottolerancezerotolerance:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontrolscalingmethodscalingpivottolerancezerotolerance:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontrolscalingmethodscalingpivottolerancezerotolerance:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontrolscalingmethodscalingpivottolerancezerotolerance:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontrolscalingmethodscalingpivottolerancezerotolerance:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontrolscalingmethodscalingpivottolerancezerotolerance:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcontrolscalingmethodscalingpivottolerancezerotolerance:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(control: SparseControl_t, scalingMethod: SparseScaling_t, scaling: UnsafeMutableRawPointer?, pivotTolerance: Double, zeroTolerance: Double)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0001">**Note**: Only the symmetric factorization algorithms use the <a href="sparsenumericfactoroptions/pivottolerance.md">@@TOKEN_0@@</a> and <a href="sparsenumericfactoroptions/zerotolerance.md">@@TOKEN_1@@</a> parameters.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0008:0002"><a href="sparsefactorizationqr.md">@@TOKEN_0@@</a> ignores the pivot and zero tolerance values.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>session</code>: 정보를 제공하는 session입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>audioSampleBuffer</code>: 출력된 sample buffer입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0003"><code>scaling</code>: An array that scales the matrix before factorization.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0004"><code>pivotTolerance</code>: The pivot tolerance that threshold partial pivoting uses.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0005"><code>zeroTolerance</code>: The zero tolerance that some pivoting modes use.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsenumericfactoroptions/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">카메라를 통해 본 실제 세계 객체와 장치 간 거리를 제공하는 옵션입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">하드웨어 오디오 입력 경로 사용 가능 여부를 나타내는 Boolean 값입니다.</span>
