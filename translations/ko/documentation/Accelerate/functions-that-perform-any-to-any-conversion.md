---
source_path: "documentation/Accelerate/functions-that-perform-any-to-any-conversion.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/functions-that-perform-any-to-any-conversion"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:functions-that-perform-any-to-any-conversion:0000:0001">임의의 색상 공간 및 비트 깊이 간 임의 변환 수행 함수</span>

<span class="ko-segment" data-segment-id="seg:paragraph:functions-that-perform-any-to-any-conversion:0001:0001">**프레임워크**: Accelerate</span>

<span class="ko-segment" data-segment-id="seg:paragraph:functions-that-perform-any-to-any-conversion:0002:0001">Core Video 또는 Core Graphics 이미지 데이터를 임의의 색상 공간과 비트 깊이 사이에서 변환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:creating-a-converter:0004:0001">변환기 생성</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-converter:0005:0001"><a href="vimageconverter.md">class vImageConverter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-converter:0006:0001">A description of a conversion from one image format to another.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-converter:0007:0001"><a href="vimageconverter_createwithcgimageformat(_:_:_:_:_:">func vImageConverter_CreateWithCGImageFormat(UnsafePointer&lt;vImage_CGImageFormat&gt;, UnsafePointer&lt;vImage_CGImageFormat&gt;, UnsafePointer&lt;CGFloat&gt;!, vImage_Flags, UnsafeMutablePointer&lt;vImage_Error&gt;!) -&gt; Unmanaged&lt;vImageConverter&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-converter:0008:0001">Creates a vImage converter that converts from one vImage Core Graphics image format to another.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-converter:0009:0001"><a href="vimageconverter_createwithcgcolorconversioninfo(_:_:_:_:_:_:">func vImageConverter_CreateWithCGColorConversionInfo(CGColorConversionInfo, UnsafePointer&lt;vImage_CGImageFormat&gt;, UnsafePointer&lt;vImage_CGImageFormat&gt;, UnsafePointer&lt;CGFloat&gt;!, vImage_Flags, UnsafeMutablePointer&lt;vImage_Error&gt;!) -&gt; Unmanaged&lt;vImageConverter&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-converter:0010:0001">Creates an any-to-any converter that uses a color conversion information object to convert from one image format to another.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-converter:0011:0001"><a href="vimageconverter_createforcgtocvimageformat(_:_:_:_:_:">func vImageConverter_CreateForCGToCVImageFormat(UnsafePointer&lt;vImage_CGImageFormat&gt;, vImageCVImageFormat, UnsafePointer&lt;CGFloat&gt;!, vImage_Flags, UnsafeMutablePointer&lt;vImage_Error&gt;!) -&gt; Unmanaged&lt;vImageConverter&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-converter:0012:0001">Creates a vImage converter that converts a Core Graphics-formatted image to a Core Video-formatted image.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-converter:0013:0001"><a href="vimageconverter_createforcvtocgimageformat(_:_:_:_:_:">func vImageConverter_CreateForCVToCGImageFormat(vImageCVImageFormat, UnsafePointer&lt;vImage_CGImageFormat&gt;, UnsafePointer&lt;CGFloat&gt;!, vImage_Flags, UnsafeMutablePointer&lt;vImage_Error&gt;!) -&gt; Unmanaged&lt;vImageConverter&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-converter:0014:0001">Creates a vImage converter that converts a Core Video-formatted image to a Core Graphics-formatted image.</span>

- <span class="ko-segment" data-segment-id="seg:list:creating-a-converter:0015:0001"><a href="vimageconverter_createwithcolorsynccodefragment(_:_:_:_:_:_:">func vImageConverter_CreateWithColorSyncCodeFragment(CFTypeRef, UnsafePointer&lt;vImage_CGImageFormat&gt;, UnsafePointer&lt;vImage_CGImageFormat&gt;!, UnsafePointer&lt;CGFloat&gt;!, vImage_Flags, UnsafeMutablePointer&lt;vImage_Error&gt;!) -&gt; Unmanaged&lt;vImageConverter&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:creating-a-converter:0016:0001">Creates a vImage converter to convert from one vImage Core Graphics image format to another, using custom ColorSync transform.</span>

### <span class="ko-segment" data-segment-id="seg:heading:performing-a-conversion:0017:0001">Performing a conversion</span>

- <span class="ko-segment" data-segment-id="seg:list:performing-a-conversion:0018:0001"><a href="vimageconvert_anytoany(_:_:_:_:_:">func vImageConvert_AnyToAny(vImageConverter, UnsafePointer&lt;vImage_Buffer&gt;, UnsafePointer&lt;vImage_Buffer&gt;, UnsafeMutableRawPointer!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:performing-a-conversion:0019:0001">Converts the pixels in a vImage buffer to another format, using the specified converter.</span>

- <span class="ko-segment" data-segment-id="seg:list:performing-a-conversion:0020:0001"><a href="1399056-vimage-buffer-type-codes.md">vImage Buffer Type Codes</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:performing-a-conversion:0021:0001">Constants that specify the contents of vImage buffers.</span>

### <span class="ko-segment" data-segment-id="seg:heading:querying-a-converters-properties:0022:0001">Querying a converter’s properties</span>

- <span class="ko-segment" data-segment-id="seg:list:querying-a-converters-properties:0023:0001"><a href="vimageconverter_mustoperateoutofplace(_:_:_:_:">func vImageConverter_MustOperateOutOfPlace(vImageConverter, UnsafePointer&lt;vImage_Buffer&gt;!, UnsafePointer&lt;vImage_Buffer&gt;!, vImage_Flags) -&gt; vImage_Error</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:querying-a-converters-properties:0024:0001">Determines whether a converter is capable of operating in place.</span>

- <span class="ko-segment" data-segment-id="seg:list:querying-a-converters-properties:0025:0001"><a href="vimageconverter_getsourcebufferorder(_:">func vImageConverter_GetSourceBufferOrder(vImageConverter) -&gt; UnsafePointer&lt;vImageBufferTypeCode&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:querying-a-converters-properties:0026:0001">Returns a list of vImage source buffer channel names, specifying the order of planes.</span>

- <span class="ko-segment" data-segment-id="seg:list:querying-a-converters-properties:0027:0001"><a href="vimageconverter_getdestinationbufferorder(_:">func vImageConverter_GetDestinationBufferOrder(vImageConverter) -&gt; UnsafePointer&lt;vImageBufferTypeCode&gt;!</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:querying-a-converters-properties:0028:0001">Returns a list of vImage destination buffer channel names, specifying the order of planes.</span>

- <span class="ko-segment" data-segment-id="seg:list:querying-a-converters-properties:0029:0001"><a href="vimageconverter_getnumberofsourcebuffers(_:">func vImageConverter_GetNumberOfSourceBuffers(vImageConverter) -&gt; UInt</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:querying-a-converters-properties:0030:0001">Returns the number of source buffers consumed by the converter.</span>

- <span class="ko-segment" data-segment-id="seg:list:querying-a-converters-properties:0031:0001"><a href="vimageconverter_getnumberofdestinationbuffers(_:">func vImageConverter_GetNumberOfDestinationBuffers(vImageConverter) -&gt; UInt</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:querying-a-converters-properties:0032:0001">Returns the number of destination buffers written to by the converter.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0033:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="building-a-basic-image-conversion-workflow.md">Building a basic image conversion workflow</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Learn the fundamentals of the convert-any-to-any function by converting a CMYK image to an RGB image.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="converting-chroma-subsampled-images.md">Converting chroma-subsampled images</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Create vImage buffers with the correct dimensions to convert to and from images with subsampled chroma information.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/functions-that-perform-any-to-any-conversion">View on Apple Developer</a>*</span>
