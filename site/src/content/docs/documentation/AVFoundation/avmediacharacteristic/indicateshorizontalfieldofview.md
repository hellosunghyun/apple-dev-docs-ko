---
source_path: "documentation/AVFoundation/avmediacharacteristic/indicateshorizontalfieldofview.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/indicateshorizontalfieldofview"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:indicateshorizontalfieldofview:0000:0001">indicatesHorizontalFieldOfView</span>

<span class="ko-segment" data-segment-id="seg:paragraph:indicateshorizontalfieldofview:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:indicateshorizontalfieldofview:0002:0001">비디오 트랙에 수평 시야각과 관련된 정보가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:indicateshorizontalfieldofview:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:indicateshorizontalfieldofview:0004:0001">iOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:indicateshorizontalfieldofview:0004:0002">iPadOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:indicateshorizontalfieldofview:0004:0003">Mac Catalyst 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:indicateshorizontalfieldofview:0004:0004">macOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:indicateshorizontalfieldofview:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:indicateshorizontalfieldofview:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let indicatesHorizontalFieldOfView: AVMediaCharacteristic
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 미디어 특성은 <a href="https://developer.apple.com/documentation/CoreMedia/CMVideoFormatDescription">@@TOKEN_0@@</a>에 <a href="https://developer.apple.com/documentation/CoreMedia/kCMFormatDescriptionExtension_HorizontalFieldOfView">@@TOKEN_1@@</a> 확장자가 포함된 경우에 나타납니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이는 시야각이 일반적인 수평 시야각보다 넓어지거나 더 좁아졌다는 뜻이 아닙니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 특성의 값은 <code>public.indicates-horizontal-field-of-view</code>입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**Note**: 이 특성의 존재는 연관된 트랙의 형식 설명에서 엄격하게 유추됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/commonidentifierartist.md">static let visual: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙 또는 미디어 선택 옵션에 시각적 콘텐츠가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmetadataidentifier/commonidentifierartwork.md">static let containsAlphaChannel: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙에 알파 채널이 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmetadataidentifier/commonidentifierassetidentifier.md">static let containsHDRVideo: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">트랙에 HDR 비디오가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmetadataidentifier/commonidentifierauthor.md">static let frameBased: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">트랙 또는 미디어 선택 옵션에 프레임 기반 콘텐츠가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadataidentifier/commonidentifiercontributor.md">static let usesWideGamutColorSpace: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">트랙이 와이드 감마 색 공간을 사용하는지를 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avmetadataidentifier/commonidentifiercopyrights.md">static let containsStereoMultiviewVideo: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">트랙에 멀티뷰 압축 형식으로 캡처한 입체 비디오가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avmetadataidentifier/commonidentifiercreationdate.md">static let carriesVideoStereoMetadata: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">입체 비디오 트랙이 입체 비디오와 관련된 추가 정보를 보유함을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avmetadataidentifier/commonidentifiercreator.md">static let indicatesNonRectilinearProjection: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">비디오 트랙이 표시 시 어떻게 투영되어야 하는지와 관련된 정보를 포함함을 나타내는 미디어 특성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/indicateshorizontalfieldofview">View on Apple Developer</a>*</span>
