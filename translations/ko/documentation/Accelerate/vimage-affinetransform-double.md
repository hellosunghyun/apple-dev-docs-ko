---
source_path: "documentation/Accelerate/vimage-affinetransform-double.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vimage-affinetransform-double"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vimageaffinetransformdouble:0000:0001">vImage_AffineTransform_Double</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageaffinetransformdouble:0001:0001">**Framework**: Accelerate **Kind**: struct</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageaffinetransformdouble:0002:0001">배정밀도 어파인 변환을 나타내는 구조체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vimageaffinetransformdouble:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vimageaffinetransformdouble:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinetransformdouble:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinetransformdouble:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinetransformdouble:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinetransformdouble:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinetransformdouble:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vimageaffinetransformdouble:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
struct vImage_AffineTransform_Double
```

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0007:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">이 구조체는 3x2 행렬을 나타냅니다:</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/15175700351555931d77e36e3b8efd15/media-2557524.gif">3 by 2 matrix</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">64비트 애플리케이션에서 이 구조체는 Core Graphics <a href="https://developer.apple.com/documentation/CoreFoundation/CGAffineTransform">@@TOKEN_0@@</a> 데이터 구조체와 동일합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">32비트 애플리케이션에서 Core Graphics 데이터 구조는 <a href="vimage_affinetransform.md">@@TOKEN_0@@</a>와 같습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0003">대부분의 경우 아키텍처에 따라 크기가 달라지는 <a href="vimage_cgaffinetransform.md">@@TOKEN_0@@</a> 데이터 구조를 사용해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0011:0001"><a href="https://developer.apple.com/documentation/CoreGraphics/cgaffinetransform">@@TOKEN_0@@</a>은 이 형식의 행렬을 생성하고 조작하는 함수를 설명합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0012:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:initializers:0013:0001">Initializers</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0014:0001"><a href="vimage_affinetransform_double/init(a:b:c:d:tx:ty:">init(a: Double, b: Double, c: Double, d: Double, tx: Double, ty: Double)</a>-9nehj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initializers:0015:0001">새로운 어파인 변환을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0001"><a href="vimage_affinetransform_double/init.md">init()</a></span>
- <span class="ko-segment" data-segment-id="seg:list:initializers:0016:0002"><a href="vimage_affinetransform_double/init(a:b:c:d:tx:ty:">init(a: CGFloat, b: CGFloat, c: CGFloat, d: CGFloat, tx: CGFloat, ty: CGFloat)</a>-4gqxp.md)</span>

### <span class="ko-segment" data-segment-id="seg:heading:affine-transform-matrix-elements:0017:0001">어파인 변환 행렬 요소</span>

- <span class="ko-segment" data-segment-id="seg:list:affine-transform-matrix-elements:0018:0001"><a href="vimage_affinetransform_double/a.md">var a: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:affine-transform-matrix-elements:0019:0001">행렬에서 <code>[1,1]</code> 위치에 있는 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:affine-transform-matrix-elements:0020:0001"><a href="vimage_affinetransform_double/b.md">var b: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:affine-transform-matrix-elements:0021:0001">행렬에서 <code>[1,2]</code> 위치에 있는 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:affine-transform-matrix-elements:0022:0001"><a href="vimage_affinetransform_double/c.md">var c: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:affine-transform-matrix-elements:0023:0001">행렬에서 <code>[2,1]</code> 위치에 있는 항목입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:affine-transform-matrix-elements:0024:0001"><a href="vimage_affinetransform_double/d.md">var d: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:affine-transform-matrix-elements:0025:0001">The entry at position <code>[2,2]</code> in the matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:affine-transform-matrix-elements:0026:0001"><a href="vimage_affinetransform_double/tx.md">var tx: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:affine-transform-matrix-elements:0027:0001">The entry at position <code>[3,1]</code> in the matrix.</span>

- <span class="ko-segment" data-segment-id="seg:list:affine-transform-matrix-elements:0028:0001"><a href="vimage_affinetransform_double/ty.md">var ty: Double</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:affine-transform-matrix-elements:0029:0001">The entry at position <code>[3,2]</code> in the matrix.</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0030:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforms-to:0031:0001">Conforms To</span>

- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0001"><a href="../Swift/BitwiseCopyable.md">BitwiseCopyable</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforms-to:0032:0002"><a href="../Swift/Sendable.md">Sendable</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vimage_buffer.md">struct vImage_Buffer</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">An image buffer that stores an image’s pixel data, dimensions, and row stride.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vimagepixelcount.md">typealias vImagePixelCount</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">A type for the number of pixels.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001"><a href="vimage_affinetransform.md">struct vImage_AffineTransform</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">A structure for values that represent an affine transformation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="vimage_cgaffinetransform.md">typealias vImage_CGAffineTransform</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">A structure for values that represent a Core Graphics–compatible affine transformation.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="vimage_error.md">typealias vImage_Error</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">A type for image errors.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="vimage_flags.md">typealias vImage_Flags</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">A type for processing options.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="gammafunction.md">typealias GammaFunction</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">A type for a gamma function.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="resamplingfilter.md">typealias ResamplingFilter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">A pointer to a resampling filter callback function.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">*<a href="https://developer.apple.com/documentation/accelerate/vimage_affinetransform_double">View on Apple Developer</a>*</span>
