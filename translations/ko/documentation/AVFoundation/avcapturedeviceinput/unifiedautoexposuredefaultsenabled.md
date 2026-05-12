---
source_path: "documentation/AVFoundation/avcapturedeviceinput/unifiedautoexposuredefaultsenabled.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/unifiedautoexposuredefaultsenabled"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:unifiedautoexposuredefaultsenabled:0000:0001">unifiedAutoExposureDefaultsEnabled</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unifiedautoexposuredefaultsenabled:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unifiedautoexposuredefaultsenabled:0002:0001">입력에서 통합 자동 노출 기본 설정을 활성화하는지 나타내는 부울 값입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:unifiedautoexposuredefaultsenabled:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:unifiedautoexposuredefaultsenabled:0004:0001">iOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unifiedautoexposuredefaultsenabled:0004:0002">iPadOS 12.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unifiedautoexposuredefaultsenabled:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:unifiedautoexposuredefaultsenabled:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var unifiedAutoExposureDefaultsEnabled: Bool { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">캡처 장치의 <a href="avcapturedevice/activeformat.md">@@TOKEN_0@@</a> 값은 두 가지 방식으로 설정할 수 있습니다.</span>

1. <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001">장치의 <a href="avcapturedevice/formats.md">@@TOKEN_0@@</a> 속성에 있는 형식 중 하나를 직접 사용해 직접 설정합니다.</span>
2. <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002">캡처 세션은 <a href="avcapturesession/sessionpreset.md">@@TOKEN_0@@</a> 속성을 설정할 때 이를 대신 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">기기 및 형식에 따라 한 방법을 사용하거나 다른 방법을 사용할 때 기본 자동 노출 동작이 다르게 구성되어 자동 노출 동작이 일관되지 않을 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">자동 노출 기본 설정에는 <a href="avframeraterange/minframerate.md">@@TOKEN_0@@</a>, <a href="avframeraterange/maxframerate.md">@@TOKEN_1@@</a>, <a href="avcapturedevice/format/maxexposureduration.md">@@TOKEN_2@@</a>가 포함됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0003">이 속성을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>로 설정하면 활성 형식을 설정하는 방식과 상관없이 시스템이 장치에 일관된 기본 동작을 적용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">기본값은 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_0@@</a>입니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0012:0001">**Note**: 이 속성을 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>로 설정했더라도 장치의 <a href="avframeraterange/minframerate.md">@@TOKEN_1@@</a>, <a href="avframeraterange/maxframerate.md">@@TOKEN_2@@</a>, <a href="avcapturedevice/format/maxexposureduration.md">@@TOKEN_3@@</a>를 수동으로 설정하면 장치 기본값이 덮어쓰기됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedeviceinput/videominframedurationoverride.md">var videoMinFrameDurationOverride: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">캡처 디바이스의 활성 비디오 최소 프레임 지속 시간에 수정자 역할을 하는 시간 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/unifiedautoexposuredefaultsenabled">View on Apple Developer</a>*</span>
