---
source_path: "documentation/AVFoundation/avcaptureresolvedphotosettings/previewdimensions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/previewdimensions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:previewdimensions:0000:0001">previewDimensions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:previewdimensions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:previewdimensions:0002:0001">시스템이 캡처와 함께 전달하는 미리보기 이미지의 크기(픽셀 단위)입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:previewdimensions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:previewdimensions:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:previewdimensions:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:previewdimensions:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:previewdimensions:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var previewDimensions: CMVideoDimensions { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처의 기본 사진 출력과 함께 미리보기 이미지 전달을 요청하려면 사진 설정 객체의 <a href="avcapturephotosettings/previewphotoformat.md">@@TOKEN_0@@</a> 속성을 사용합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">미리보기를 요청하면 사진 출력이 캡처된 사진의 종횡비를 유지하면서 요청한 크기에 가장 잘 맞는 크기를 선택합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">종횡비는 캡처 형식과 캡처 시점의 디바이스 방향으로 결정됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0001">**참고**: 사진 캡처 시스템은 전체 크기의 기본 이미지에 보조 이미지인 *preview* 및 *thumbnail*을 모두 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0002">미리보기 이미지는 즉시 표시하도록 설계되어 있으며(iOS Camera 앱에서 사진을 촬영할 때와 동일), 현재 디바이스에서 전체 화면 표시될 수 있도록 크기가 조정됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0009:0003">썸네일 이미지는 출력 이미지 파일에 내장되며, 파일 브라우저의 Quick Look과 같은 다른 소프트웨어에서 전체 이미지 파일을 모두 로드하지 않고도 빠르게 이미지 미리보기를 할 수 있도록 사용됩니다. 썸네일 이미지 크기는 출력 파일 형식에 따라 제한될 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 속성은 <a href="avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:">@@TOKEN_0@@</a>.md) 메서드로 전달되는 요청된 미리보기 이미지의 크기를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">이 속성은 전달 전에 크기를 확인할 수 있도록 이전 delegate 메서드에서 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">미리보기 이미지를 요청하지 않으면 이 속성의 값은 너비와 높이가 모두 0입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avcaptureresolvedphotosettings/photodimensions.md">var photoDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">시스템이 전달하는 사진 이미지의 크기(픽셀 단위, JPEG 등 처리된 형식)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avcaptureresolvedphotosettings/deferredphotoproxydimensions.md">var deferredPhotoProxyDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지연된 사진 전달을 사용할 때 photo proxy의 해상도(치수)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avcaptureresolvedphotosettings/rawphotodimensions.md">var rawPhotoDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">시스템이 전달하는 RAW 형식 사진 이미지의 크기(픽셀 단위)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avcaptureresolvedphotosettings/embeddedthumbnaildimensions.md">var embeddedThumbnailDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">시스템이 전달하는 썸네일 이미지의 크기(픽셀 단위)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avcaptureresolvedphotosettings/rawembeddedthumbnaildimensions.md">var rawEmbeddedThumbnailDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">시스템이 전달하는 RAW 형식의 내장 썸네일 이미지 크기(픽셀 단위)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avcaptureresolvedphotosettings/livephotomoviedimensions.md">var livePhotoMovieDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">시스템이 전달하는 Live Photo 동영상 콘텐츠의 크기(픽셀 단위)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avcaptureresolvedphotosettings/portraiteffectsmattedimensions.md">var portraitEffectsMatteDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">시스템이 전달하는 portrait effects matte의 크기(픽셀 단위)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0027:0001"><a href="avcaptureresolvedphotosettings/dimensionsforsemanticsegmentationmatte(oftype:">func dimensionsForSemanticSegmentationMatte(ofType: AVSemanticSegmentationMatte.MatteType) -&gt; CMVideoDimensions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">사진 출력이 전달하는 semantic segmentation matte의 해결된 치수를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0029:0001"><a href="avcaptureresolvedphotosettings/photoprocessingtimerange.md">var photoProcessingTimeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0030:0001">시스템이 delegate에 사진을 전달할 것으로 예상되는 시간 범위입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/previewdimensions">View on Apple Developer</a>*</span>
