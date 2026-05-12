---
source_path: "documentation/AVFoundation/avcapturedeviceinput/externalsyncdevice.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/externalsyncdevice"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:externalsyncdevice:0000:0001">externalSyncDevice</span>

<span class="ko-segment" data-segment-id="seg:paragraph:externalsyncdevice:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:externalsyncdevice:0002:0001">현재 이 입력에서 추적 중인 외부 동기화 장치입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:externalsyncdevice:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:externalsyncdevice:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:externalsyncdevice:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:externalsyncdevice:0004:0003">Mac Catalyst 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:externalsyncdevice:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:externalsyncdevice:0004:0005">tvOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var externalSyncDevice: AVExternalSyncDevice? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 읽기 전용 속성은 <a href="avcapturedeviceinput/follow(_:videoframeduration:delegate:">@@TOKEN_0@@</a>.md)에서 제공한 <a href="avexternalsyncdevice.md">@@TOKEN_1@@</a> 인스턴스를 반환합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">외부 동기화 장치가 연결이 끊기거나 보정에 실패하면 이 속성은 <code>nil</code>을 반환합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturedeviceinput/isexternalsyncsupported.md">var isExternalSyncSupported: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">장치 입력이 외부 동기화 장치를 따르도록 구성할 수 있는지 여부를 나타냅니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmetadataidentifier/id3metadataattachedpicture.md">func follow(AVExternalSyncDevice, videoFrameDuration: CMTime, delegate: (any AVExternalSyncDeviceDelegate)?)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">지정된 프레임 지속 시간으로 장치 입력이 외부 동기화 장치를 따르도록 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcapturedeviceinput/unfollowexternalsyncdevice.md">func unfollowExternalSyncDevice()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">외부 동기화를 중단합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturedeviceinput/activeexternalsyncvideoframeduration.md">var activeExternalSyncVideoFrameDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">수신기에서 외부 동기화 장치에 의해 구동될 때 외부 동기화 프레임 지속 시간(프레임 속도의 역수)이 사용됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturedeviceinput/externalsyncdevice">View on Apple Developer</a>*</span>
