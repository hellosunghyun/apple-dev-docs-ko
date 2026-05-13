---
source_path: "documentation/Accelerate/vdsp/linearinterpolate-using-71as1.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/linearinterpolate-using-71as1"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:linearinterpolateusing:0000:0001">linearInterpolate(_:_:using:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:linearinterpolateusing:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:linearinterpolateusing:0002:0001">Returns the linear interpolation between the supplied single-precision vectors.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:linearinterpolateusing:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:linearinterpolateusing:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:linearinterpolateusing:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:linearinterpolateusing:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:linearinterpolateusing:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:linearinterpolateusing:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:linearinterpolateusing:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:linearinterpolateusing:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static func linearInterpolate<T, U>(_ vectorA: T, _ vectorB: U, using interpolationConstant: Float) -> [Float] where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Float, U.Element == Float
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 상수는 다음 연산으로 값을 반환하는 활성화 함수를 정의합니다:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">For example, the following code creates two arrays, vectorA and vectorB, that contain sine waves:</span>

```swift
let n = 1024

let vectorA: [Float] = (0 ... n).map {
    return 2 + sin(Float($0) * 0.07)
}

let vectorB: [Float] = (0 ... n).map {
    return -2 + sin(Float($0) * 0.03)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">Use <a href="vdsp/linearinterpolate(_:_:using:">@@TOKEN_0@@</a>-71as1.md) with an interpolation constant of 0.5 to generate a new vector that’s the average of the two sine waves:</span>

```swift
let result = vDSP.linearInterpolate(vectorA, vectorB,
                                    using: 0.5)
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">The following figure visualizes the two source vectors: the blue lines at the top and bottom, and the interpolation result: the red line in the center:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001">!<a href="https://docs-assets.developer.apple.com/published/80d7655938ef049813f9ca5edd8e745e/media-3521332%402x.png">Graphic illustrating two sine waves and a third vector that’s the linear interpolation between them.</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001">[static func linearInterpolate&lt;T, U&gt;(T, U, using: Double) -&gt; [Double]](vdsp/linearinterpolate(_:_:using:)-3j5d2.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Returns the linear interpolation between the supplied double-precision vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vdsp/linearinterpolate(_:_:using:result:">static func linearInterpolate&lt;T, U, V&gt;(T, U, using: Double, result: inout V)</a>-6o7a9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Calculates the linear interpolation between the supplied double-precision vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vdsp/linearinterpolate(_:_:using:result:">static func linearInterpolate&lt;T, U, V&gt;(T, U, using: Float, result: inout V)</a>-55avl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Calculates the linear interpolation between the supplied single-precision vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/linearinterpolate(_:_:using:">View on Apple Developer</a>-71as1)*</span>
