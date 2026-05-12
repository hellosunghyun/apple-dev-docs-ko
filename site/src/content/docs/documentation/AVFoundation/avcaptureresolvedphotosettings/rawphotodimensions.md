---
source_path: "documentation/AVFoundation/avcaptureresolvedphotosettings/rawphotodimensions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/rawphotodimensions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:rawphotodimensions:0000:0001">rawPhotoDimensions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawphotodimensions:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawphotodimensions:0002:0001">캡처가 전달하는 RAW 형식 사진 이미지의 픽셀 단위 크기입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:rawphotodimensions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:rawphotodimensions:0004:0001">iOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rawphotodimensions:0004:0002">iPadOS 10.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rawphotodimensions:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:rawphotodimensions:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var rawPhotoDimensions: CMVideoDimensions { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처된 이미지의 출력 차원은 캡처 시점에 장치 방향과 캡처 세션 구성에 따라 설정됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">(예를 들어 캡처 세션에 비디오 출력이 포함되고 비디오 안정화가 사용 중이면 캡처된 사진이 더 작아집니다.)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">The value of this property is <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a> if the track can’t calculate its minimum frame duration, or if it’s unknown.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 속성은 전달되기 전에 이미지 크기를 확인하려고 이전 delegate 메서드에서 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">Use the filtering methods <a href="avmediaselectiongroup.md">@@TOKEN_0@@</a> defines to filter the group’s options according to playability, locale, and additional media characteristics.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcaptureresolvedphotosettings/photodimensions.md">var photoDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">캡처가 제공하는 사진 이미지의 크기(처리 형식 예: JPEG)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcaptureresolvedphotosettings/deferredphotoproxydimensions.md">var deferredPhotoProxyDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지연된 사진 전달 시 photo proxy의 해결된 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcaptureresolvedphotosettings/previewdimensions.md">var previewDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">캡처와 함께 시스템이 제공하는 미리보기 이미지의 픽셀 단위 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avcaptureresolvedphotosettings/embeddedthumbnaildimensions.md">var embeddedThumbnailDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">캡처가 전달하는 썸네일 이미지의 픽셀 단위 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avcaptureresolvedphotosettings/rawembeddedthumbnaildimensions.md">var rawEmbeddedThumbnailDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">캡처가 전달하는 RAW 형식 임베디드 썸네일 이미지의 픽셀 단위 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avcaptureresolvedphotosettings/livephotomoviedimensions.md">var livePhotoMovieDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">캡처가 전달하는 Live Photo 동영상 콘텐츠의 픽셀 단위 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avcaptureresolvedphotosettings/portraiteffectsmattedimensions.md">var portraitEffectsMatteDimensions: CMVideoDimensions</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">캡처가 전달하는 portrait effects matte의 픽셀 단위 크기입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avcaptureresolvedphotosettings/dimensionsforsemanticsegmentationmatte(oftype:">func dimensionsForSemanticSegmentationMatte(ofType: AVSemanticSegmentationMatte.MatteType) -&gt; CMVideoDimensions</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">사진 출력이 제공하는 시맨틱 세그멘테이션 matte의 해결된 크기를 검색합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avcaptureresolvedphotosettings/photoprocessingtimerange.md">var photoProcessingTimeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">덜리게이트에서 사진이 전달될 것으로 예상되는 시간 범위입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptureresolvedphotosettings/rawphotodimensions">View on Apple Developer</a>*</span>
