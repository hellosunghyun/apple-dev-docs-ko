---
source_path: "documentation/Accelerate/sparsesolve-87v8w.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/sparsesolve-87v8w"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:sparsesolve:0000:0001">SparseSolve(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0002:0001">Solves the equation *Subfactor * X = B* in place for the vector of double-precision values *X*.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:sparsesolve:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0004">macOS 10.13+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0005">tvOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:sparsesolve:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func SparseSolve(_ Subfactor: SparseOpaqueSubfactor_Double, _ XB: DenseVector_Double)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>Subfactor</code>: The *Subfactor* in *Subfactor* ** X = B* that <a href="sparsecreatesubfactor(_:_:">@@TOKEN_1@@</a>-49d8w.md) returns.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>XB</code>: On input, the vector *B*. On return, the vector *X* overwrites it.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var outputDataSources: [AVAudioSessionDataSourceDescription]?](avaudiosession/outputdatasources.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">오디오 하드웨어 입력 채널 수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Double, DenseVector_Double, DenseVector_Double)</a>-g0wb.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">대형 룸 환경의 음향 특성을 나타내는 리버브 프리셋입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="sparsesolve(_:_:_:">func SparseSolve(SparseOpaqueSubfactor_Float, DenseVector_Float, DenseVector_Float)</a>-5mq7s.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">중형 홀 환경의 음향 특성을 나타내는 리버브 프리셋입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">대형 홀 환경의 음향 특성을 나타내는 리버브 프리셋입니다.</span>
