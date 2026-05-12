---
source_path: "documentation/AVFoundation/avcapturemoviefileoutput/setrecordsvideoorientationandmirroringchangesasmetadatatrack-for.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/setrecordsvideoorientationandmirroringchangesasmetadatatrack-for"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0000:0001">setRecordsVideoOrientationAndMirroringChangesAsMetadataTrack(_:for:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0002:0001">이 메서드는 연결의 비디오 방향 및 미러링 변경사항을 캡처하기 위해 movie file output이 타임드 메타데이터 트랙을 생성할지 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0004:0001">iOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0004:0002">iPadOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0004:0003">Mac Catalyst 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:setrecordsvideoorientationandmirroringchangesasmetadatatrackfor:0004:0004">tvOS 17.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func setRecordsVideoOrientationAndMirroringChangesAsMetadataTrack(_ doRecordChanges: Bool, for connection: AVCaptureConnection)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>doRecordChanges</code>: 방향 및 미러링 정보를 캡처할지 나타내는 Boolean 값입니다. 시스템은 이 값을 녹화 시작 시에만 관찰합니다. 다른 값을 설정하더라도 새 녹화를 시작할 때까지는 효과가 없습니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>connection</code>: 동영상 미디어를 movie file output으로 전달하는 연결입니다. 값이 비디오 연결이 아니거나 연결이 movie file output에서 종료되지 않으면 이 메서드는 잘못된 인수 예외를 throw합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">관련 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avcapturemoviefileoutput/recordsvideoorientationandmirroringchangesasmetadatatrack(for:">func recordsVideoOrientationAndMirroringChangesAsMetadataTrack(for: AVCaptureConnection) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">동영상 파일 출력이 비디오 방향 및 미러링 정보를 메타데이터 트랙으로 기록하는지 여부를 나타내는 부울 값입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturemoviefileoutput/setrecordsvideoorientationandmirroringchangesasmetadatatrack(_:for:">View on Apple Developer</a>)*</span>
