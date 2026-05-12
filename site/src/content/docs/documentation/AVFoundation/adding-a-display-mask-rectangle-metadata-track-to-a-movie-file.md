---
source_path: "documentation/AVFoundation/adding-a-display-mask-rectangle-metadata-track-to-a-movie-file.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/adding-a-display-mask-rectangle-metadata-track-to-a-movie-file"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:adding-a-display-mask-rectangle-metadata-track-to-a-movie-file:0000:0001">동영상 파일에 디스플레이 마스크 사각형 메타데이터 트랙 추가</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adding-a-display-mask-rectangle-metadata-track-to-a-movie-file:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adding-a-display-mask-rectangle-metadata-track-to-a-movie-file:0002:0001">타임드 디스플레이 마스크 사각형 메타데이터를 사용해 동영상의 특정 영역을 표시합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:adding-a-display-mask-rectangle-metadata-track-to-a-movie-file:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:adding-a-display-mask-rectangle-metadata-track-to-a-movie-file:0004:0001">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:adding-a-display-mask-rectangle-metadata-track-to-a-movie-file:0004:0002">Xcode 26.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">QuickTime 동영상은 재생 중 표시할 동영상 영역을 나타내는 디스플레이 마스크 사각형 메타데이터를 제공할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">visionOS 26 이상에서는 시스템이 이 메타데이터를 읽고 지정된 표시 영역으로 동영상을 잘라내어 디스플레이 마스크 밖 영역을 투명하게 렌더링합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0003">디스플레이 마스크를 사용하면 렌더링 시 인코딩된 검은색 레터박스나 필러박스를 제거하거나, 동영상의 가시 부분을 동적으로 변경해 창의적인 효과를 적용할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">이 샘플은 디스플레이 마스크 사각형 메타데이터가 포함된 QuickTime 동영상 파일을 생성하는 방법을 보여 주는 명령줄 앱입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0002">샘플은 디스플레이 마스크 사각형 메타데이터를 저장하기 위해 타임드 메타데이터 트랙을 추가하고, 비디오 재생 시스템에 연결을 알리기 위해 비디오에 렌더 트랙 참조를 연결합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">아래 화면 녹화는 샘플 앱이 추가한 두 종류의 디스플레이 마스크 사각형 메타데이터가 원본 동영상과 비교해 표시되는 동영상에 미치는 영향을 보여줍니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0009:0001">**참고**: 이 메타데이터 유형의 상세 정보는 <a href="https://developer.apple.comhttps://developer.apple.com/av-foundation/Rectangular-Dynamic-Mask-Metadata.pdf">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:configure-the-sample-code-project:0010:0001">샘플 코드 프로젝트 구성</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0011:0001">샘플에는 세 개의 인수가 필요합니다:</span>

```bash
./AVAddDisplayMaskTrack <input-path> <output-path> <display-mask-type>
```

- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0013:0001">**<code>&lt;input-path&gt;</code>**: 비디오 트랙이 있는 기존 소스 QuickTime 동영상 파일의 경로입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0013:0002">**<code>&lt;output-path&gt;</code>**: 소스 동영상의 미디어 트랙과 추가 디스플레이 마스크 사각형 타임드 메타데이터 트랙이 포함된 새 출력 QuickTime 동영상 파일의 경로입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0013:0003">**<code>&lt;display-mask-type&gt;</code>**: 디스플레이 마스크의 정수 유형입니다. <code>1</code> 또는 <code>2</code>의 두 가지 유형만 있으며, 세 번째 인수가 없거나 유효한 값이 아니면 기본값은 <code>1</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configure-the-sample-code-project:0014:0001"><code>display-mask-type</code> 인수는 동영상 파일에 기록할 디스플레이 마스크를 지정합니다:</span>

- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0015:0001">유형 1 디스플레이 마스크는 동영상의 짧은 변을 기준으로 75% 크기의 정사각형이며, 영화 전체 길이 동안 동영상 프레임 중앙에 고정됩니다. 예를 들어 동영상 크기가 1920 x 1080이면 디스플레이 마스크는 810 x 810(1080 <code>*</code> 0.75 = 810)이며, 중심 좌표는 (960, 540)입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:configure-the-sample-code-project:0015:0002">유형 2 디스플레이 마스크는 동영상의 짧은 변을 기준으로 30% 크기의 프레임별 정사각형 마스크이며, 동영상 프레임 전역을 이동합니다. 이 유형은 연결된 비디오 트랙의 프레임 레이트에 맞춰 갱신되는 동적 디스플레이 마스크 메타데이터를 보여줍니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:set-up-a-display-mask-rectangle-metadata-track:0016:0001">디스플레이 마스크 사각형 메타데이터 트랙 설정</span>

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0017:0001">샘플은 앱의 메타데이터 처리 로직을 담은 <code>MovieProcessor</code> 클래스를 제공합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0017:0002">앱을 실행하면 지정한 명령줄 인수가 <code>MovieProcessor</code> 클래스의 <code>processMovie(inputPath:outputPath:displayMaskType:)</code> 메서드로 전달됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0017:0003">이 메서드는 각각 <a href="avassetreader.md">@@TOKEN_0@@</a>와 <a href="avassetwriter.md">@@TOKEN_1@@</a>를 사용해 읽기와 쓰기 기능을 설정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0018:0001">자산 쓰기 동안 메타데이터를 추가할 수 있도록 이 메서드는 <code>addDisplayMaskMetadataTrack(to:videoInput:videoInfo:)</code>를 호출해 디스플레이 마스크 사각형용 타임드 메타데이터 트랙을 작성하는 <a href="avassetwriterinput.md">@@TOKEN_1@@</a>를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0018:0002">쓰기 입력을 만들기 전에 이 메서드는 디스플레이 마스크 메타데이터용 <a href="https://developer.apple.com/documentation/CoreMedia/CMMetadataFormatDescription">@@TOKEN_0@@</a>를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0018:0003">형식 설명은 박스형 메타데이터(<code>mebx</code>) 유형을 사용하고, <a href="https://developer.apple.com/documentation/CoreMedia/kCMMetadataIdentifier_QuickTimeMetadataDisplayMaskRectangleMono">@@TOKEN_1@@</a> 식별자를 <a href="https://developer.apple.com/documentation/CoreMedia/kCMMetadataBaseDataType_RasterRectangleValue">@@TOKEN_2@@</a> 데이터 유형과 짝지어 사용합니다:
``<code>swift
// Define the metadata specifications for the monoscopic display mask rectangle.
let metadataSpecifications: [[String: Any]] = [[
    kCMMetadataFormatDescriptionMetadataSpecificationKey_Identifier as String:
        kCMMetadataIdentifier_QuickTimeMetadataDisplayMaskRectangleMono as String,
    kCMMetadataFormatDescriptionMetadataSpecificationKey_DataType as String:
        kCMMetadataBaseDataType_RasterRectangleValue as String
]]

// Create the </code>CMMetadataFormatDescription<code> for the monoscopic display mask rectangle
// in boxed metadata (</code>mebx<code>) type.
var metadataFormatDesc: CMMetadataFormatDescription? = nil
let status = CMMetadataFormatDescriptionCreateWithMetadataSpecifications(
    allocator: kCFAllocatorDefault,
    metadataType: kCMMetadataFormatType_Boxed,
    metadataSpecifications: metadataSpecifications as CFArray,
    formatDescriptionOut: &amp;metadataFormatDesc
)
</code>``</span>

```swift
// Define the metadata specifications for the monoscopic display mask rectangle.
let metadataSpecifications: [[String: Any]] = [[
    kCMMetadataFormatDescriptionMetadataSpecificationKey_Identifier as String:
        kCMMetadataIdentifier_QuickTimeMetadataDisplayMaskRectangleMono as String,
    kCMMetadataFormatDescriptionMetadataSpecificationKey_DataType as String:
        kCMMetadataBaseDataType_RasterRectangleValue as String
]]

// Create the `CMMetadataFormatDescription` for the monoscopic display mask rectangle
// in boxed metadata (`mebx`) type.
var metadataFormatDesc: CMMetadataFormatDescription? = nil
let status = CMMetadataFormatDescriptionCreateWithMetadataSpecifications(
    allocator: kCFAllocatorDefault,
    metadataType: kCMMetadataFormatType_Boxed,
    metadataSpecifications: metadataSpecifications as CFArray,
    formatDescriptionOut: &metadataFormatDesc
)
```

> <span class="ko-segment" data-segment-id="seg:blockquote:set-up-a-display-mask-rectangle-metadata-track:0020:0001">**참고**: <code>metadataSpecifications</code> 배열에는 이 타임드 메타데이터 트랙 내에 다른 메타데이터를 저장해야 하는 경우 추가 식별자와 데이터 형식 쌍을 포함할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:set-up-a-display-mask-rectangle-metadata-track:0020:0002">추가 메타데이터 식별자 및 데이터 형식 목록은 <a href="https://developer.apple.com/documentation/CoreMedia/cmmetadata">@@TOKEN_0@@</a>에서 확인할 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0021:0001">형식 설명이 준비되면, 메서드는 메타데이터 트랙에 대한 <a href="avassetwriterinput.md">@@TOKEN_0@@</a>를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0021:0002">이 메서드는 라이브 캡처 소스에서 받는 대신, 앱이 처리할 수 있는 속도로 메타데이터 샘플을 작성하므로 <a href="avassetwriterinput/expectsmediadatainrealtime.md">@@TOKEN_0@@</a>를 <code>false</code>로 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0021:0003">또한 메타데이터 샘플 타임스탬프를 비디오 프레임과 정확히 정렬하기 위해 <a href="avassetwriterinput/mediatimescale.md">@@TOKEN_0@@</a>도 비디오 트랙과 일치하도록 설정합니다.</span>

```swift
// Create the `AVAssetWriterInput` for the display mask metadata track and attach it to `AVAssetWriter`.
metadataInput = AVAssetWriterInput(mediaType: .metadata, outputSettings: nil, sourceFormatHint: metadataFormatDesc)
guard let metadataInput else {
    throw ProcessingError.writerInputCreationFailed("DisplayMask metadata.")
}

metadataInput.expectsMediaDataInRealTime = false
metadataInput.mediaTimeScale = videoInfo.timescale
```

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0023:0001">그런 다음 메서드는 작성기 입력에 타임드 메타데이터 그룹을 추가하기 위해 <a href="avassetwriterinputmetadataadaptor.md">@@TOKEN_0@@</a>를 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0023:0002">이 어댑터는 샘플 버퍼를 직접 다루는 대신 시간 범위와 함께 메타데이터 항목을 패키지로 묶는 <a href="avtimedmetadatagroup.md">@@TOKEN_0@@</a> 객체를 작성할 때 편리한 방법을 제공합니다.</span>

```swift
// Create the metadata adaptor for the display mask metadata's `AVAssetWriterInput`.
metadataAdaptor = AVAssetWriterInputMetadataAdaptor(assetWriterInput: metadataInput)
```

<span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0025:0001">마지막으로 메서드는 메타데이터 입력을 에셋 라이터에 추가하고 메타데이터 트랙과 비디오 트랙 간의 트랙 연결을 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0025:0002">재생 시스템이 디스플레이 마스크 메타데이터가 적용되는 비디오 트랙을 인식하려면 렌더 메타데이터 소스 연결(<code>rndr</code>)이 필요합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:set-up-a-display-mask-rectangle-metadata-track:0025:0003">이 연결이 없으면 재생 시스템은 해당 메타데이터를 무시합니다.</span>

```swift
if writer.canAdd(metadataInput) {
    writer.add(metadataInput)

    // Add the `rndr` track association between the display mask metadata track and
    // the enabled video track.
    metadataInput.addTrackAssociation(withTrackOf: videoInput, type: AVAssetTrack.AssociationType.renderMetadataSource.rawValue)
} else {
    throw ProcessingError.cannotAddWriterInput("DisplayMask metadata.")
}
```

#### <span class="ko-segment" data-segment-id="seg:heading:write-display-mask-rectangle-metadata:0027:0001">디스플레이 마스크 직사각형 메타데이터 쓰기</span>

<span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0028:0001"><code>setupDisplayMaskMetadataTransfer(videoInfo:maskType:)</code> 메서드는 디스플레이 마스크 메타데이터 샘플을 타임드 메타데이터 트랙에 쓰는 작업을 처리합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0028:0002">이 메서드는 비디오 트랙 크기를 사용해 래스터 사각형 매개변수를 계산하고 이전에 생성한 어댑터로 메타데이터 샘플을 작성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0029:0001">명령줄에서 지정한 디스플레이 마스크 유형에 따라 이 메서드는 두 경로 중 하나를 사용합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:write-display-mask-rectangle-metadata:0030:0001">유형 1은 정적 디스플레이 마스크를 생성합니다 — 비디오의 전체 재생 동안 고정되는 단일 중앙 정사각형입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:write-display-mask-rectangle-metadata:0030:0002">유형 2는 동적 디스플레이 마스크를 생성합니다 — 프레임 전체를 가로지르는 더 작은 정사각형으로, 각 비디오 프레임마다 새 메타데이터 샘플이 작성됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0031:0001">각 경로에서 사용하는 구체적인 계산은 샘플 프로젝트의 <code>MovieProcessor.swift</code> 파일을 참조하고 <code>Type 1 static display mask calculation.</code> 및 <code>Type 2 dynamic display mask initialization/update calculation.</code> 마커를 확인하세요.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0032:0001">서로 다른 메타데이터를 작성하더라도 두 경로는 유사한 패턴을 따릅니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0032:0002">메타데이터 입력이 준비되면 데이터를 요청하고, 디스플레이 마스크 직사각형의 타임드 메타데이터 그룹을 생성한 뒤 이를 메타데이터 어댑터에 추가합니다.</span>

```swift
metadataInput.requestMediaDataWhenReady(on: queue) {
    while metadataInput.isReadyForMoreMediaData {
        let rasterRectangle = // Calculate the raster rectangle parameters for this media sample.

        // Create the timed metadata group and append it.
        let metadataGroup = self.createMetadataGroupForDisplayMask(
            rasterRectangle: rasterRectangle,
            sampleTime: sampleTime,
            sampleDuration: sampleDuration
        )
        // Append the metadata group.
        metadataAdaptor.append(metadataGroup)
    }
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0034:0001"><code>createMetadataGroupForDisplayMask(rasterRectangle:sampleTime:sampleDuration:)</code> 메서드는 타임드 메타데이터 그룹을 생성합니다.</span>

```swift
private func createMetadataGroupForDisplayMask(rasterRectangle: [Int],
                sampleTime: CMTime, sampleDuration: CMTime) -> AVTimedMetadataGroup {
    let metadataItem = AVMutableMetadataItem()
    metadataItem.identifier = AVMetadataIdentifier(
        kCMMetadataIdentifier_QuickTimeMetadataDisplayMaskRectangleMono as String)
    metadataItem.value = rasterRectangle as NSArray
    metadataItem.dataType = kCMMetadataBaseDataType_RasterRectangleValue as String

    // Wrap the metadata item in `AVTimedMetadataGroup`.
    let timedMetadataGroup = AVTimedMetadataGroup(
        items: [metadataItem],
        timeRange: CMTimeRange(start: sampleTime, duration: sampleDuration)
    )

    return timedMetadataGroup
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0036:0001">이 메서드는 디스플레이 마스크 식별자와 데이터 형식으로 <a href="avmutablemetadataitem.md">@@TOKEN_0@@</a>를 생성하고, 값을 래스터 사각형 배열로 설정한 후 지정한 시간 범위를 가진 <a href="avtimedmetadatagroup.md">@@TOKEN_1@@</a>으로 래핑합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0036:0002"><code>rasterRectangle</code> 매개변수는 여섯 개 정수 배열로, <code>[rasterWidth, rasterHeight, left, width, top, height]</code>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0036:0003"><code>timeRange</code>는 재생 중 이 메타데이터가 적용되는 시점을 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:write-display-mask-rectangle-metadata:0037:0001">정적 마스크의 경우 시간 범위는 전체 비디오 지속 시간을 포괄합니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:write-display-mask-rectangle-metadata:0037:0002">동적 마스크의 경우 시간 범위는 단일 비디오 프레임의 지속 시간과 일치합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0038:0001">에셋 라이터가 완료되면 출력 파일에는 디스플레이 마스크 직사각형 메타데이터 트랙이 포함된 원본 비디오가 들어갑니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:write-display-mask-rectangle-metadata:0038:0002">visionOS 26 이상에서는 Files와 같은 앱에서 파일을 재생해 디스플레이 마스크 효과를 확인할 수 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0039:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="converting-projected-video-to-apple-projected-media-profile.md">Converting projected video to Apple Projected Media Profile</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">이퀄리어큘러 또는 반 이퀄리어큘러 투영 콘텐츠를 APMP로 변환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="converting-side-by-side-3d-video-to-multiview-hevc-and-spatial-video.md">Converting side-by-side 3D video to multiview HEVC and spatial video</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">기존 3D HEVC 파일을 멀티뷰 HEVC 형식으로 변환해 visionOS용 비디오 콘텐츠를 생성하고, 필요에 따라 공간 메타데이터를 추가하여 공간 비디오를 만들 수 있습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="writing-fragmented-mpeg-4-files-for-http-live-streaming.md">Writing fragmented MPEG-4 files for HTTP Live Streaming</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">영화 파일을 분할된 MPEG-4 파일 시퀀스로 변환하여 HTTP Live Streaming 프레젠테이션을 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0046:0001"><a href="../ImageIO/Creating-spatial-photos-and-videos-with-spatial-metadata.md">Creating spatial photos and videos with spatial metadata</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">Apple Vision Pro에서 볼 수 있는 공간 미디어를 만들기 위해 스테레오 사진과 동영상에 공간 메타데이터를 추가합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0048:0001"><a href="tagging-media-with-video-color-information.md">Tagging media with video color information</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0049:0001">미디어를 작성하고 트랜스코딩할 때 비디오 색공간 정보를 검사하고 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0050:0001"><a href="evaluating-an-app-s-video-color.md">Evaluating an app’s video color</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0051:0001">테스트 패턴, 비디오 테스트 장비, 광도 측정 기기를 사용해 앱의 비디오 색 재현을 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0052:0001"><a href="avoutputsettingsassistant.md">class AVOutputSettingsAssistant</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0053:0001">오디오 및 비디오 출력 설정 딕셔너리를 구성하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0054:0001"><a href="avassetwriter.md">class AVAssetWriter</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0055:0001">미디어 데이터를 컨테이너 파일에 쓰는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0056:0001"><a href="avassetwriterinput.md">class AVAssetWriterInput</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0057:0001">에셋 작성기 출력 파일의 트랙에 미디어 샘플을 추가하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0058:0001"><a href="avassetwriterinputpixelbufferadaptor.md">class AVAssetWriterInputPixelBufferAdaptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0059:0001">에셋 작성기 입력에 비디오 샘플을 추가하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0060:0001"><a href="avassetwriterinputtaggedpixelbuffergroupadaptor.md">class AVAssetWriterInputTaggedPixelBufferGroupAdaptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0061:0001">에셋 작성기 입력에 태그된 버퍼 그룹을 추가하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0062:0001"><a href="avassetwriterinputmetadataadaptor.md">class AVAssetWriterInputMetadataAdaptor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0063:0001">에셋 작성기 입력에 타임드 메타데이터 그룹을 추가하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0064:0001"><a href="avassetwriterinputgroup.md">class AVAssetWriterInputGroup</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0065:0001">재생 또는 처리 시 서로 배타적인 트랙을 가진 입력 그룹입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0067:0001">*<a href="https://developer.apple.com/documentation/avfoundation/adding-a-display-mask-rectangle-metadata-track-to-a-movie-file">View on Apple Developer</a>*</span>
