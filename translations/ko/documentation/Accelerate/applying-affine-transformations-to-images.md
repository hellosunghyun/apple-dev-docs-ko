---
source_path: "documentation/Accelerate/applying-affine-transformations-to-images.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/applying-affine-transformations-to-images"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:applying-affine-transformations-to-images:0000:0001">이미지에 아핀 변환 적용</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-affine-transformations-to-images:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:applying-affine-transformations-to-images:0002:0001">이미지를 이동, 회전 및 크기 조정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:single-precision-affine-transformation:0004:0001">단정밀도 아핀 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0005:0001"><a href="vimageaffinewarp_planar8(_:_:_:_:_:_:">func vImageAffineWarp_Planar8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, Pixel_8, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-affine-transformation:0006:0001">8비트 평면 이미지에 단정밀도 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0007:0001"><a href="vimageaffinewarp_planarf(_:_:_:_:_:_:">func vImageAffineWarp_PlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, Pixel_F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-affine-transformation:0008:0001">32비트 평면 이미지에 단정밀도 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0009:0001"><a href="vimageaffinewarp_argb16u(_:_:_:_:_:_:">func vImageAffineWarp_ARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-affine-transformation:0010:0001">채널당 부호 없는 16비트의 4채널 인터리브된 이미지에 단정밀도 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0011:0001"><a href="vimageaffinewarp_argb16s(_:_:_:_:_:_:">func vImageAffineWarp_ARGB16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-affine-transformation:0012:0001">채널당 부호 있는 16비트의 4채널 인터리브된 이미지에 단정밀도 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0013:0001"><a href="vimageaffinewarp_argb8888(_:_:_:_:_:_:">func vImageAffineWarp_ARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-affine-transformation:0014:0001">채널당 8비트의 4채널 인터리브된 이미지에 단정밀도 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0015:0001"><a href="vimageaffinewarp_argbffff(_:_:_:_:_:_:">func vImageAffineWarp_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:single-precision-affine-transformation:0016:0001">채널당 32비트의 4채널 인터리브된 이미지에 단정밀도 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0017:0001"><a href="vimageaffinewarp_argb16f(_:_:_:_:_:_:">func vImageAffineWarp_ARGB16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0017:0002"><a href="vimageaffinewarp_cbcr16f(_:_:_:_:_:_:">func vImageAffineWarp_CbCr16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:single-precision-affine-transformation:0017:0003"><a href="vimageaffinewarp_planar16f(_:_:_:_:_:_:">func vImageAffineWarp_Planar16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform&gt;, Pixel_16F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

### <span class="ko-segment" data-segment-id="seg:heading:double-precision-affine-transformation:0018:0001">이중 정밀도 아핀 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0019:0001"><a href="vimageaffinewarpd_planar8(_:_:_:_:_:_:">func vImageAffineWarpD_Planar8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, Pixel_8, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0020:0001">8비트 평면 이미지에 이중 정밀도 아핀 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0021:0001"><a href="vimageaffinewarpd_planarf(_:_:_:_:_:_:">func vImageAffineWarpD_PlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, Pixel_F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0022:0001">32비트 평면 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0023:0001"><a href="vimageaffinewarpd_planar16f(_:_:_:_:_:_:">func vImageAffineWarpD_Planar16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, Pixel_16F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0024:0001">부동 소수점 16비트 평면 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0025:0001"><a href="vimageaffinewarpd_cbcr16f(_:_:_:_:_:_:">func vImageAffineWarpD_CbCr16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0026:0001">부동 소수점 16비트, 채널당 2채널 인터리브 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0027:0001"><a href="vimageaffinewarpd_argb8888(_:_:_:_:_:_:">func vImageAffineWarpD_ARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0028:0001">채널당 8비트, 4채널 인터리브 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0029:0001"><a href="vimageaffinewarpd_argb16u(_:_:_:_:_:_:">func vImageAffineWarpD_ARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0030:0001">부호 없는 채널당 16비트, 4채널 인터리브 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0031:0001"><a href="vimageaffinewarpd_argb16s(_:_:_:_:_:_:">func vImageAffineWarpD_ARGB16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0032:0001">부호 있는 채널당 16비트, 4채널 인터리브 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0033:0001"><a href="vimageaffinewarpd_argb16f(_:_:_:_:_:_:">func vImageAffineWarpD_ARGB16F(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0034:0001">채널당 16비트 부동 소수점, 4채널 인터리브 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:double-precision-affine-transformation:0035:0001"><a href="vimageaffinewarpd_argbffff(_:_:_:_:_:_:">func vImageAffineWarpD_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_AffineTransform_Double&gt;, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:double-precision-affine-transformation:0036:0001">채널당 32비트, 4채널 인터리브 이미지에 이중 정밀도 affine 변환을 적용합니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:core-graphics-affine-transformation:0037:0001">Core Graphics affine 변환</span>

- <span class="ko-segment" data-segment-id="seg:list:core-graphics-affine-transformation:0038:0001"><a href="vimageaffinewarpcg_planar8(_:_:_:_:_:_:">func vImageAffineWarpCG_Planar8(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_CGAffineTransform&gt;, Pixel_8, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:core-graphics-affine-transformation:0039:0001">Planar8 소스 이미지에 Core Graphics affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:core-graphics-affine-transformation:0040:0001"><a href="vimageaffinewarpcg_planarf(_:_:_:_:_:_:">func vImageAffineWarpCG_PlanarF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_CGAffineTransform&gt;, Pixel_F, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:core-graphics-affine-transformation:0041:0001">PlanarF 소스 이미지에 Core Graphics affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:core-graphics-affine-transformation:0042:0001"><a href="vimageaffinewarpcg_argb16u(_:_:_:_:_:_:">func vImageAffineWarpCG_ARGB16U(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_CGAffineTransform&gt;, UnsafePointer&lt;UInt16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:core-graphics-affine-transformation:0043:0001">ARGB16U 소스 이미지에 Core Graphics affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:core-graphics-affine-transformation:0044:0001"><a href="vimageaffinewarpcg_argb16s(_:_:_:_:_:_:">func vImageAffineWarpCG_ARGB16S(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_CGAffineTransform&gt;, UnsafePointer&lt;Int16&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:core-graphics-affine-transformation:0045:0001">ARGB16S 소스 이미지에 Core Graphics affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:core-graphics-affine-transformation:0046:0001"><a href="vimageaffinewarpcg_argb8888(_:_:_:_:_:_:">func vImageAffineWarpCG_ARGB8888(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_CGAffineTransform&gt;, UnsafePointer&lt;UInt8&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:core-graphics-affine-transformation:0047:0001">ARGB8888 소스 이미지에 Core Graphics affine 변환을 적용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:core-graphics-affine-transformation:0048:0001"><a href="vimageaffinewarpcg_argbffff(_:_:_:_:_:_:">func vImageAffineWarpCG_ARGBFFFF(UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, UnsafePointer&lt;vImage_CGAffineTransform&gt;, UnsafePointer&lt;Float&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:core-graphics-affine-transformation:0049:0001">ARGBFFFF 소스 이미지에 Core Graphics affine 변환을 적용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0050:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0051:0001"><a href="resampling-in-vimage.md">Resampling in vImage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0052:0001">vImage가 기하학적 연산 중 이미지 데이터를 다시 샘플링하는 방식을 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0053:0001"><a href="applying-projective-transformations-to-images.md">Applying projective transformations to images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0054:0001">이미지를 3차원으로 왜곡합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0055:0001"><a href="image-reflection.md">Image reflection</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0056:0001">이미지를 수평 및 수직으로 반사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0057:0001"><a href="image-shearing.md">Image shearing</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0058:0001">이미지를 수평 및 수직으로 전단 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0059:0001"><a href="image-rotation.md">Image rotation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0060:0001">이미지를 임의 각도로 또는 90도 배수로 회전합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0061:0001"><a href="image-scaling.md">Image scaling</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0062:0001">인터레이스 및 평면 이미지를 스케일링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0063:0001"><a href="getting-the-buffer-size.md">Getting the Buffer Size</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0064:0001">고급 기하학 함수를 사용할 때 필요한 임시 버퍼 크기를 계산합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0066:0001">*<a href="https://developer.apple.com/documentation/accelerate/applying-affine-transformations-to-images">View on Apple Developer</a>*</span>
