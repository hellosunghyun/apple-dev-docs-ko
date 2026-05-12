---
source_path: "documentation/AVFoundation/avmutablevideocomposition/colorycbcrmatrix.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/colorycbcrmatrix"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:colorycbcrmatrix:0000:0001">colorYCbCrMatrix</span>

<span class="ko-segment" data-segment-id="seg:paragraph:colorycbcrmatrix:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:colorycbcrmatrix:0002:0001">비디오 컴포지션에 사용되는 YCbCr 매트릭스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:colorycbcrmatrix:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:colorycbcrmatrix:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:colorycbcrmatrix:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:colorycbcrmatrix:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:colorycbcrmatrix:0004:0004">macOS 10.12+</span>
- <span class="ko-segment" data-segment-id="seg:list:colorycbcrmatrix:0004:0005">tvOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:colorycbcrmatrix:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var colorYCbCrMatrix: String? { get set }
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="tagging-media-with-video-color-information.md">Tagging media with video color information</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">기본값은 <code>nil</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 속성의 값이 <code>nil</code>이면 소스의 매트릭스가 전파되어 사용됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">유효한 값은 <a href="avvideoycbcrmatrixkey.md">@@TOKEN_0@@</a>에 적합한 값입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablevideocomposition/colorprimaries.md">var colorPrimaries: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">비디오 컴포지션에 사용되는 컬러 프라이머리입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmutablevideocomposition/colortransferfunction.md">var colorTransferFunction: String?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">비디오 컴포지션에 사용되는 전송 함수입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/colorycbcrmatrix">View on Apple Developer</a>*</span>
