---
source_path: "documentation/Accelerate/vdsp/dot-9pb8y.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp/dot-9pb8y"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:dot:0000:0001">dot(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dot:0001:0001">**Framework**: Accelerate **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:dot:0002:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:dot:0003:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dot:0003:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dot:0003:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:dot:0003:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:dot:0003:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:dot:0003:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:dot:0003:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0004:0001">Declaration</span>

```swift
static func dot<T, U>(_ vectorA: T, _ vectorB: U) -> Float where T : AccelerateBuffer, U : AccelerateBuffer, T.Element == Float, U.Element == Float
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0006:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0007:0001"><a href="avplayeritem/init(url:">convenience init(url: URL)</a>-1xrtk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0008:0001">지정된 URL로 플레이어 항목을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="avplayeritem/init(asset:">convenience init(asset: AVAsset)</a>-87rjl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">지정된 자산에 대한 플레이어 항목을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001">[convenience init(asset: AVAsset, automaticallyLoadedAssetKeys: [AVPartialAsyncProperty&lt;AVAsset&gt;])](avplayeritem/init(asset:automaticallyloadedassetkeys:)-5czjh.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">지정된 자산에 대한 플레이어 항목을 생성하고 지정한 속성의 값을 자동으로 로드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001">[convenience init(asset: any AVAsset &amp; Sendable, automaticallyLoadedAssetKeys: [AVPartialAsyncProperty&lt;AVAsset&gt;])](avplayeritem/init(asset:automaticallyloadedassetkeys:)-85hal.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">Calculates the absolute value of each element in the supplied double-precision complex vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-657bd.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Calculates the absolute value of each element in the supplied double-precision vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="vdsp/absolute(_:result:">static func absolute&lt;U, V&gt;(U, result: inout V)</a>-4pigo.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Calculates the absolute value of each element in the supplied single-precision vector.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001">[static func add&lt;U&gt;(Double, U) -&gt; [Double]](vdsp/add(_:_:)-9mv1a.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">Returns the double-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Double]](vdsp/add(_:_:)-2ftxc.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">Returns the double-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001">[static func add&lt;U&gt;(Float, U) -&gt; [Float]](vdsp/add(_:_:)-53nh9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">Returns the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001">[static func add&lt;T, U&gt;(T, U) -&gt; [Float]](vdsp/add(_:_:)-7swvf.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">Returns the single-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Double, U, result: inout V)</a>-2531u.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">Calculates the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="vdsp/add(_:_:result:">static func add&lt;U, V&gt;(Float, U, result: inout V)</a>-2w0o9.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">Calculates the single-precision element-wise sum of a vector and a scalar value.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-338hl.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">Calculates the double-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="vdsp/add(_:_:result:">static func add&lt;T, U, V&gt;(T, U, result: inout V)</a>-3vzwi.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">Calculates the single-precision element-wise sum of two vectors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="vdsp/add(_:to:count:result:">static func add(DSPSplitComplex, to: DSPSplitComplex, count: Int, result: inout DSPSplitComplex)</a>-g1dk.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">Calculates the single-precision element-wise sum of the supplied complex vectors.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp/dot(_:_:">View on Apple Developer</a>-9pb8y)*</span>
