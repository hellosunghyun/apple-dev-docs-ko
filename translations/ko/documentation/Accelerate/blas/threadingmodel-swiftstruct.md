---
source_path: "documentation/Accelerate/blas/threadingmodel-swiftstruct.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/blas/threadingmodel-swiftstruct"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:blasthreadingmodel:0000:0001">BLAS.ThreadingModel</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasthreadingmodel:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasthreadingmodel:0002:0001">Constants that describe the BLAS and LAPACK threading model.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasthreadingmodel:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:blasthreadingmodel:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingmodel:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingmodel:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingmodel:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingmodel:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingmodel:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasthreadingmodel:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct ThreadingModel
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">Use the threading model constants to specify whether BLAS and LAPACK operations run in a single thread or multiple threads.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">Specify the single-threaded model if your app uses its own threading mechanism.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0009:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:specifying-a-threading-model:0010:0001">Specifying a threading model</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-threading-model:0011:0001"><a href="blas/threadingmodel-swift.struct/multithreaded.md">static let multiThreaded: BLAS.ThreadingModel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-threading-model:0012:0001">A constant that specifies that the Accelerate framework decides whether BLAS and LAPACK execute on single or multiple threads.</span>

- <span class="ko-segment" data-segment-id="seg:list:specifying-a-threading-model:0013:0001"><a href="blas/threadingmodel-swift.struct/singlethreaded.md">static let singleThreaded: BLAS.ThreadingModel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:specifying-a-threading-model:0014:0001">A constant that specifies BLAS and LAPACK execute on a single thread only.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0015:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0016:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0001"><a href="../Swift/Equatable.md">Equatable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0017:0002"><a href="../Swift/RawRepresentable.md">RawRepresentable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0018:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="blas/threadingmodel-swift.type.property.md">static var threadingModel: BLAS.ThreadingModel</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">여러 캡처 출력에서 동시에 수집한 데이터 샘플 집합입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/accelerate/blas/threadingmodel-swift.struct">View on Apple Developer</a>*</span>
