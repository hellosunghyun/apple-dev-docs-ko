---
source_path: "documentation/Accelerate/blasgetthreading.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/blasgetthreading"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:blasgetthreading:0000:0001">BLASGetThreading()</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasgetthreading:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasgetthreading:0002:0001">Returns the current BLAS and LAPACK threading model.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:blasgetthreading:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:blasgetthreading:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasgetthreading:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasgetthreading:0004:0003">Mac Catalyst 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasgetthreading:0004:0004">macOS 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasgetthreading:0004:0005">tvOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasgetthreading:0004:0006">visionOS 2.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:blasgetthreading:0004:0007">watchOS 11.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func BLASGetThreading() -> BLAS_THREADING
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">Return Value</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">A constant that represents the current BLAS and LAPACK threading model.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="blas.md">struct BLAS</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">An enumeration that acts as a namespace for Swift overlays to BLAS.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="imagetrackingprovider/requiredauthorizations.md">static let leftFoot: ARSkeleton.JointName</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Sets the BLAS and LAPACK threading model.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="blas_threading.md">struct BLAS_THREADING</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Constants that describe the BLAS and LAPACK threading model.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/accelerate/blasgetthreading(">View on Apple Developer</a>)*</span>
