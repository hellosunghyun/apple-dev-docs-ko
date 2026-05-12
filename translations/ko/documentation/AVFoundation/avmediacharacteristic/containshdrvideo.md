---
source_path: "documentation/AVFoundation/avmediacharacteristic/containshdrvideo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/containshdrvideo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:containshdrvideo:0000:0001">containsHDRVideo</span>

<span class="ko-segment" data-segment-id="seg:paragraph:containshdrvideo:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:containshdrvideo:0002:0001">트랙에 HDR 비디오가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:containshdrvideo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:containshdrvideo:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containshdrvideo:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containshdrvideo:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containshdrvideo:0004:0004">macOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containshdrvideo:0004:0005">tvOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:containshdrvideo:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let containsHDRVideo: AVMediaCharacteristic
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">HDR 비디오에는 합성 시 명시적인 지원이 필요한 확장된 동적 범위가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">시스템은 관련 트랙의 형식 설명을 기반으로 이 특성을 추론합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 특성의 값은 <code>public.contains-hdr-video</code>입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">추가 참조</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="avmediacharacteristic/visual.md">static let visual: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">해당 트랙 또는 미디어 선택 옵션에 시각적 콘텐츠가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avmediacharacteristic/containsalphachannel.md">static let containsAlphaChannel: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">트랙에 알파 채널이 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avmediacharacteristic/framebased.md">static let frameBased: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">해당 트랙 또는 미디어 선택 옵션에 프레임 기반 콘텐츠가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avmediacharacteristic/useswidegamutcolorspace.md">static let usesWideGamutColorSpace: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">트랙이 와이드갬트 색 공간을 사용하는지를 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avmediacharacteristic/containsstereomultiviewvideo.md">static let containsStereoMultiviewVideo: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">트랙에 다중 뷰 압축 형식으로 캡처한 입체 영상을 포함하는지를 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0021:0001"><a href="avmediacharacteristic/carriesvideostereometadata.md">static let carriesVideoStereoMetadata: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">입체 비디오 트랙이 입체 비디오와 관련된 추가 정보를 포함하고 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0023:0001"><a href="avmediacharacteristic/indicateshorizontalfieldofview.md">static let indicatesHorizontalFieldOfView: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0024:0001">비디오 트랙이 수평 시야각과 관련된 정보를 포함하고 있음을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0025:0001"><a href="avmediacharacteristic/indicatesnonrectilinearprojection.md">static let indicatesNonRectilinearProjection: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0026:0001">비디오 트랙이 표시용으로 투영될 방식을 나타내는 정보를 포함하고 있음을 나타내는 미디어 특성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0028:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/containshdrvideo">View on Apple Developer</a>*</span>
