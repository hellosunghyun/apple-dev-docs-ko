---
source_path: "documentation/Accelerate/blas-threading-single-threaded.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/blas-threading-single-threaded"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:blasthreadingsinglethreaded:0000:0001">BLAS_THREADING_SINGLE_THREADED</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasthreadingsinglethreaded:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasthreadingsinglethreaded:0002:0001">BLAS 및 LAPACK가 단일 스레드에서만 실행되도록 지정하는 상수입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasthreadingsinglethreaded:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:blasthreadingsinglethreaded:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingsinglethreaded:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingsinglethreaded:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingsinglethreaded:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingsinglethreaded:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingsinglethreaded:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingsinglethreaded:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var BLAS_THREADING_SINGLE_THREADED: BLAS_THREADING { get }
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="blas_threading/init(_:">init(UInt32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">스레드 모델 상수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="bnnstilebackward(_:_:_:">init(rawValue: UInt32)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">부호 없는 정수 값으로 스레드 모델 상수를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="blas_threading/rawvalue.md">var rawValue: UInt32</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">스레드 모델을 나타내는 원시 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="blas_threading_multi_threaded.md">var BLAS_THREADING_MULTI_THREADED: BLAS_THREADING</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Accelerate 프레임워크가 BLAS와 LAPACK를 단일 스레드 또는 다중 스레드로 실행할지 여부를 결정하도록 지정하는 상수입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="blas_threading_max_options.md">var BLAS_THREADING_MAX_OPTIONS: BLAS_THREADING</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/accelerate/blas_threading_single_threaded">View on Apple Developer</a>*</span>
